import React from 'react';
import { Target, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make healthy eating accessible, delicious, and satisfying for everyone who visits our cafe.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a community of health-conscious food lovers who never have to compromise on taste.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the finest organic, local ingredients to create exceptional healthy alternatives.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Constantly developing new recipes that prove healthy food can be incredibly satisfying.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Revolutionizing
                <span className="text-yellow-500 block">Cafe Culture</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                CraveFit was born from a simple belief: you shouldn't have to choose between 
                delicious food and healthy living. Our team of nutritionists and chefs work 
                together to create alternatives that are not just healthier, but genuinely 
                more satisfying than traditional cafe offerings.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every recipe is meticulously crafted using whole foods, superfoods, and 
                innovative cooking techniques that preserve nutrients while maximizing flavor. 
                We're not just serving food – we're serving a lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-yellow-500 rounded-xl border-2 border-yellow-600">
                <div className="text-3xl font-bold text-black mb-2">100+</div>
                <div className="text-black font-medium">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-yellow-500 rounded-xl border-2 border-yellow-600">
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-black font-medium">Healthy Recipes</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-500">
              <img
                src="/images/section images/about new image.jpg"
                alt="Healthy cafe food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-yellow-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-600"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-black leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;