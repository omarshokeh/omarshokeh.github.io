
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const location = useLocation();
  const { getTotalItems, setIsCartOpen } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors">
              ⚽ WorldCup Kits
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`hover:text-yellow-300 transition-colors font-medium ${
                  isActive('/') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`hover:text-yellow-300 transition-colors font-medium ${
                  isActive('/shop') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
                }`}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className={`hover:text-yellow-300 transition-colors font-medium ${
                  isActive('/contact') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex space-x-4">
            <Link
              to="/"
              className={`hover:text-yellow-300 transition-colors ${
                isActive('/') ? 'text-yellow-300' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`hover:text-yellow-300 transition-colors ${
                isActive('/shop') ? 'text-yellow-300' : ''
              }`}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className={`hover:text-yellow-300 transition-colors ${
                isActive('/contact') ? 'text-yellow-300' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <CartDrawer />
    </>
  );
};

export default Header;
