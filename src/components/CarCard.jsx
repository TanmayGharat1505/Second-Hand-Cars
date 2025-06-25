
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <Card className="car-card">
      <div className="car-image-container">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="car-image"
        />
        <div className="condition-badge">
          <Badge variant="secondary" className="condition-badge-content">
            {car.condition}
          </Badge>
        </div>
        {car.topSelling && (
          <div className="top-selling-badge">
            <Badge className="top-selling-badge-content">
              Top Selling
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="car-content">
        <div className="car-header">
          <h3 className="car-title">
            {car.brand} {car.name}
          </h3>
          <div className="rating">
            <Star className="star-icon" />
            <span className="rating-text">{car.rating}</span>
          </div>
        </div>
        
        <p className="car-details">{car.year} • {car.mileage}</p>
        <p className="car-specs">{car.fuelType} • {car.transmission}</p>
        
        <div className="price-section">
          <div>
            <span className="price">
              ${car.basePrice.toLocaleString()}
            </span>
            <p className="price-label">Starting from</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="car-footer">
        <Button asChild className="view-details-btn">
          <Link to={`/car/${car.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
