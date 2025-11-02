import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-yellow-500 py-12 border-t-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <img 
                src="/src/images/white full logo.png" 
                alt="CraveFit Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-white leading-relaxed max-w-md mt-6">
              Where healthy meets delicious. We're passionate about creating nutritious 
              alternatives that satisfy your cravings without compromising your health goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'About', 'Contact', 'Nutrition Info'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-500 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dietary Options */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">We Serve</h4>
            <ul className="space-y-2">
              {['Vegan Options', 'Gluten-Free', 'Keto Friendly', 'Raw Foods'].map((option) => (
                <li key={option}>
                  <span className="text-white">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500 mt-8 pt-8 text-center">
          <p className="text-white flex items-center justify-center space-x-1">
            <span>&copy; {currentYear} CraveFit. Made with</span>
            <Heart className="h-4 w-4 text-yellow-500 fill-current" />
            <span>for your health.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;