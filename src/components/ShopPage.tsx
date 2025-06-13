
import React from 'react';
import { useCart } from '../context/CartContext';

const kits = [
  {
    id: 'brazil-home',
    name: 'Brazil Home Kit',
    country: 'Brazil',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop'
  },
  {
    id: 'germany-home',
    name: 'Germany Home Kit',
    country: 'Germany',
    price: 84.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop'
  },
  {
    id: 'japan-home',
    name: 'Japan Home Kit',
    country: 'Japan',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
  },
  {
    id: 'morocco-home',
    name: 'Morocco Home Kit',
    country: 'Morocco',
    price: 82.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
  },
  {
    id: 'spain-home',
    name: 'Spain Home Kit',
    country: 'Spain',
    price: 87.99,
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=400&fit=crop'
  },
  {
    id: 'argentina-home',
    name: 'Argentina Home Kit',
    country: 'Argentina',
    price: 92.99,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=400&fit=crop'
  }
];

const ShopPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (kit: typeof kits[0]) => {
    addToCart({
      id: kit.id,
      name: kit.name,
      price: kit.price,
      image: kit.image
    });
  };

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            National Team Kits
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Official replica jerseys from the world's best football nations. 
            Show your support in style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {kit.name}
                </h3>
                <p className="text-gray-600 mb-4">{kit.country} National Team</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ${kit.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(kit)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Can't find your team? We're constantly adding new kits!
          </p>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
            Request a Kit
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
