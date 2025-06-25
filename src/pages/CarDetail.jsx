import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getCarById } from '../data/carsData';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const { toast } = useToast();
  
  const car = getCarById(id || '');
  
  const [selectedVariant, setSelectedVariant] = useState(
    car?.variants[0] || { name: 'Standard', priceModifier: 0 }
  );
  const [selectedColor, setSelectedColor] = useState(car?.colors[0] || 'White');

  if (!car) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-title">Car not found</h1>
          <Button asChild>
            <Link to="/">Go back to home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const finalPrice = car.basePrice + selectedVariant.priceModifier;

  const handleAddToCart = () => {
    const cartItem = {
      id: `${car.id}-${selectedVariant.name}-${selectedColor}`,
      carId: car.id,
      name: car.name,
      brand: car.brand,
      basePrice: car.basePrice,
      selectedVariant,
      selectedColor,
      finalPrice,
      image: car.image
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    
    toast({
      title: "Added to Cart!",
      description: `${car.brand} ${car.name} (${selectedVariant.name}, ${selectedColor}) has been added to your cart.`,
      className: "custom-toast"
    });
  };

  return (
    <div className="car-detail-page">
      <Navbar />
      
      <div className="car-detail-container">
        <Button asChild variant="ghost" className="back-button">
          <Link to="/">
            <ArrowLeft className="back-icon" />
            Back to Cars
          </Link>
        </Button>

        <div className="car-detail-grid">
          <div className="image-section">
            <div className="car-image-wrapper">
              <img
                src={car.image}
                alt={`${car.brand} ${car.name}`}
                className="detail-car-image"
              />
            </div>
          </div>

          <div className="details-section">
            <div className="car-info">
              <div className="car-header">
                <h1 className="car-name">{car.brand} {car.name}</h1>
                <div className="car-rating">
                  <Star className="star-filled" />
                  <span className="rating-value">{car.rating}</span>
                </div>
              </div>
              
              <div className="car-meta">
                <span>{car.year}</span>
                <span>•</span>
                <span>{car.mileage}</span>
                <span>•</span>
                <Badge variant="secondary">{car.condition}</Badge>
              </div>
            </div>

            <Card>
              <CardContent className="specs-content">
                <h3 className="specs-title">Specifications</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Fuel Type:</span>
                    <p className="spec-value">{car.fuelType}</p>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Transmission:</span>
                    <p className="spec-value">{car.transmission}</p>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Mileage:</span>
                    <p className="spec-value">{car.mileage}</p>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Condition:</span>
                    <p className="spec-value">{car.condition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="selection-section">
              <h3 className="selection-title">Select Variant</h3>
              <div className="variant-grid">
                {car.variants.map((variant) => (
                  <Button
                    key={variant.name}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-button ${selectedVariant.name === variant.name ? 'selected' : ''}`}
                  >
                    <span className="variant-name">{variant.name}</span>
                    <span className="variant-price">
                      {variant.priceModifier > 0 && '+$' + variant.priceModifier.toLocaleString()}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="selection-section">
              <h3 className="selection-title">Select Color</h3>
              <div className="color-options">
                {car.colors.map((color) => (
                  <Button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="price-card">
              <CardContent className="price-content">
                <div className="price-info">
                  <div>
                    <p className="price-label">Final Price</p>
                    <p className="final-price">
                      ${finalPrice.toLocaleString()}
                    </p>
                    {selectedVariant.priceModifier > 0 && (
                      <p className="price-breakdown">
                        Base: ${car.basePrice.toLocaleString()} + ${selectedVariant.priceModifier.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="action-buttons">
                  <Button onClick={handleAddToCart} className="add-to-cart-btn" size="lg">
                    <ShoppingCart className="cart-icon" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="buy-now-btn" size="lg">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CarDetail;
