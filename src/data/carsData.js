
const cars = [
    {
      id: '1',
      name: 'Civic',
      brand: 'Honda',
      year: 2019,
      mileage: '45,000 miles',
      condition: 'Excellent',
      basePrice: 18500,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.5,
      topSelling: true,
      image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=500&h=300&fit=crop',
      variants: [
        { name: 'Standard', priceModifier: 0 },
        { name: 'Deluxe', priceModifier: 2500 },
        { name: 'Sport', priceModifier: 4500 }
      ],
      colors: ['White', 'Black', 'Silver', 'Red']
    },
    {
      id: '2',
      name: 'Camry',
      brand: 'Toyota',
      year: 2020,
      mileage: '32,000 miles',
      condition: 'Excellent',
      basePrice: 22000,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.7,
      topSelling: true,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
      variants: [
        { name: 'Standard', priceModifier: 0 },
        { name: 'Deluxe', priceModifier: 3000 },
        { name: 'Sport', priceModifier: 5000 }
      ],
      colors: ['Black', 'White', 'Blue', 'Gray']
    },
    {
      id: '3',
      name: 'Accord',
      brand: 'Honda',
      year: 2018,
      mileage: '58,000 miles',
      condition: 'Good',
      basePrice: 16500,
      fuelType: 'Petrol',
      transmission: 'Manual',
      rating: 4.3,
      topSelling: true,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop',
      variants: [
        { name: 'Standard', priceModifier: 0 },
        { name: 'Deluxe', priceModifier: 2000 },
        { name: 'Sport', priceModifier: 3500 }
      ],
      colors: ['Silver', 'Black', 'White', 'Red']
    },
    {
      id: '4',
      name: 'Corolla',
      brand: 'Toyota',
      year: 2021,
      mileage: '15,000 miles',
      condition: 'Excellent',
      basePrice: 19500,
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      rating: 4.6,
      topSelling: true,
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&h=300&fit=crop',
      variants: [
        { name: 'Standard', priceModifier: 0 },
        { name: 'Deluxe', priceModifier: 2200 },
        { name: 'Sport', priceModifier: 4000 }
      ],
      colors: ['White', 'Silver', 'Black', 'Blue']
    },
    {
      id: '5',
      name: 'Focus',
      brand: 'Ford',
      year: 2019,
      mileage: '42,000 miles',
      condition: 'Good',
      basePrice: 14500,
      fuelType: 'Petrol',
      transmission: 'Manual',
      rating: 4.2,
      topSelling: true,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
      variants: [
        { name: 'Standard', priceModifier: 0 },
        { name: 'Deluxe', priceModifier: 1800 },
        { name: 'Sport', priceModifier: 3200 }
      ],
      colors: ['Red', 'Black', 'White', 'Blue']
    },
    {
      id: '6',
      name: 'Altima',
      brand: 'Nissan',
      year: 2020,
      mileage: '28,000 miles',
      condition: 'Excellent',
      basePrice: 20500,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.4,
      topSelling: true,
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=500&h=300&fit=crop',
      variants: [
        { name: 'Standard', priceModifier: 0 },
        { name: 'Deluxe', priceModifier: 2800 },
        { name: 'Sport', priceModifier: 4200 }
      ],
      colors: ['Gray', 'White', 'Black', 'Silver']
    }
  ];
  
  export const getTopSellingCars = () => {
    return cars.filter(car => car.topSelling);
  };
  
  export const getCarById = (id) => {
    return cars.find(car => car.id === id);
  };
  
  export const getAllCars = () => {
    return cars;
  };
  