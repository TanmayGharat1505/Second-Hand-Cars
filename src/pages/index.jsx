
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopSellingCars from '../components/TopSellingCars';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TopSellingCars />
      <Footer />
    </div>
  );
};

export default Index;
