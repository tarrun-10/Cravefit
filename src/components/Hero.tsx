import React from 'react';
import { ArrowRight, Leaf, Heart, Zap } from 'lucide-react';
import backgroundImage from '/images/background image.png';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-yellow-500 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Healthy Never
            <span className="text-white block">Tasted So Good</span>
          </h1>
          
          <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-white">
            Discover delicious, nutritious alternatives to your favorite cafe treats. 
            From guilt-free desserts to protein-packed smoothies.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500">
              <Leaf className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-white">100% Natural</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500">
              <Heart className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-white">Heart Healthy</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-white">Energy Boosting</span>
            </div>
          </div>

          <button
            onClick={scrollToMenu}
            className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl mt-8"
          >
            <span>Explore Our Menu</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-yellow-500/70 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;