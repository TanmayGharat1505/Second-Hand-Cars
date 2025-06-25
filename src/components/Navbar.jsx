
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Top Selling Cars', path: '/#top-selling' },
    { name: 'Cart', path: '/cart' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              <span className="brand-text">AutoDeal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
                onClick={() => {
                  if (item.path === '/#top-selling') {
                    const element = document.getElementById('top-selling');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name === 'Cart' ? (
                  <div className="cart-link">
                    <ShoppingCart className="cart-icon" />
                    <span>Cart</span>
                    {state.items.length > 0 && (
                      <span className="cart-badge">
                        {state.items.length}
                      </span>
                    )}
                  </div>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
            >
              {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`mobile-nav-link ${isActive(item.path) ? 'mobile-nav-link-active' : ''}`}
                onClick={() => {
                  setIsOpen(false);
                  if (item.path === '/#top-selling') {
                    setTimeout(() => {
                      const element = document.getElementById('top-selling');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                {item.name === 'Cart' ? (
                  <div className="mobile-cart-link">
                    <ShoppingCart className="cart-icon" />
                    <span>Cart</span>
                    {state.items.length > 0 && (
                      <span className="cart-badge">
                        {state.items.length}
                      </span>
                    )}
                  </div>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
