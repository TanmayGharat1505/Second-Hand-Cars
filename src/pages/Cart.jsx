
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Cart.css';

const Cart = () => {
  const { state, dispatch } = useCart();
  const { toast } = useToast();

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        
        <div className="empty-cart-container">
          <div className="empty-cart-content">
            <ShoppingBag className="empty-cart-icon" />
            <h1 className="empty-cart-title">Your Cart is Empty</h1>
            <p className="empty-cart-subtitle">
              Looks like you haven't added any cars to your cart yet.
            </p>
            <Button asChild size="lg">
              <Link to="/">
                Start Shopping
              </Link>
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />
      
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <Button variant="outline" onClick={handleClearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="cart-grid">
          {/* Cart Items */}
          <div className="cart-items-section">
            {state.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="cart-item-content">
                  <div className="cart-item">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.name}`}
                      className="cart-item-image"
                    />
                    
                    <div className="cart-item-details">
                      <h3 className="cart-item-title">
                        {item.brand} {item.name}
                      </h3>
                      <p className="cart-item-variant">
                        Variant: {item.selectedVariant.name}
                      </p>
                      <p className="cart-item-color">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    
                    <div className="cart-item-price">
                      <p className="item-final-price">
                        ${item.finalPrice.toLocaleString()}
                      </p>
                      {item.selectedVariant.priceModifier > 0 && (
                        <p className="item-price-breakdown">
                          Base: ${item.basePrice.toLocaleString()} + ${item.selectedVariant.priceModifier.toLocaleString()}
                        </p>
                      )}
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveItem(item.id)}
                      className="remove-button"
                    >
                      <Trash2 className="remove-icon" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="order-summary-section">
            <Card className="order-summary-card">
              <CardContent className="order-summary-content">
                <h2 className="order-summary-title">Order Summary</h2>
                
                <div className="order-details">
                  <div className="order-line">
                    <span>Items ({state.items.length})</span>
                    <span>${state.total.toLocaleString()}</span>
                  </div>
                  <div className="order-line">
                    <span>Processing Fee</span>
                    <span>$299</span>
                  </div>
                  <div className="order-line">
                    <span>Documentation</span>
                    <span>$199</span>
                  </div>
                  <div className="order-total">
                    <div className="total-line">
                      <span>Total</span>
                      <span className="total-amount">
                        ${(state.total + 498).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="checkout-buttons">
                  <Button className="checkout-btn" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="continue-shopping-btn" asChild>
                    <Link to="/">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
                
                <div className="order-benefits">
                  <p>✓ Free nationwide delivery</p>
                  <p>✓ 7-day return policy</p>
                  <p>✓ Comprehensive warranty</p>
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

export default Cart;
