
import { getTopSellingCars } from '../data/carsData';
import CarCard from './CarCard';
import './TopSellingCars.css';

const TopSellingCars = () => {
  const topCars = getTopSellingCars();

  return (
    <section id="top-selling" className="top-selling-section">
      <div className="top-selling-container">
        <div className="top-selling-header">
          <h2 className="top-selling-title">
            Top Selling Cars
          </h2>
          <p className="top-selling-subtitle">
            Discover our most popular second-hand vehicles, loved by customers for their quality, reliability, and value.
          </p>
        </div>
        
        <div className="cars-grid">
          {topCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingCars;
