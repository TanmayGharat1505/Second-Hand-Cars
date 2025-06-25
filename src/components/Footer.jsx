
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-section">
            <h3 className="company-title">AutoDeal</h3>
            <p className="company-description">
              Your trusted partner in finding quality second-hand cars. We provide transparent pricing, 
              detailed inspections, and excellent customer service.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="links-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#top-selling" className="footer-link">
                  Top Selling Cars
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">
                  Cart
                </Link>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-section">
            <h4 className="section-title">Contact Us</h4>
            <div className="contact-info">
              <p>📍 123 Auto Street, Car City, CC 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@autodeal.com</p>
              <p>🕒 Mon-Sat: 9AM-7PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 AutoDeal. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;