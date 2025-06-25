
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-bg"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Find Your Perfect
            <span className="hero-highlight"> Second-Hand Car</span>
          </h1>
          <p className="hero-subtitle">
            Discover quality pre-owned vehicles at unbeatable prices. Your dream car is just a click away.
          </p>
          <div className="hero-buttons">
            <Button 
              asChild 
              size="lg" 
              className="primary-button"
            >
              <Link to="#top-selling">Browse Cars</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="secondary-button"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
