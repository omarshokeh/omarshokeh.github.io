
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            WorldCup Kits
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your destination for authentic national team kits from around the world. 
            Wear your passion with pride.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Shop Now ⚽
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose WorldCup Kits?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Global Collection</h3>
              <p className="text-gray-600">
                Authentic kits from over 50 countries, representing every confederation worldwide.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">
                Official replicas with authentic materials and professional craftsmanship.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick delivery worldwide so you can support your team without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teams */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured National Teams
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Brazil', 'Germany', 'Japan', 'Morocco'].map((country) => (
              <div key={country} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{country}</h3>
                <p className="text-gray-600 text-sm">Official World Cup Kit</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              View All Kits
            </Link>
          </div>
        </div>
      </section>

      {/* Google Analytics Placeholder */}
      {/*
      <!-- Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      </script>
      */}
    </main>
  );
};

export default HomePage;
