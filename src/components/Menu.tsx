import React, { useState } from 'react';
import { Star, Clock, Leaf } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('desserts');

  const categories = [
    { id: 'desserts', name: 'Desserts', icon: '🧁' },
    { id: 'shakes', name: 'Shakes', icon: '🥤' },
    { id: 'pancakes', name: 'Pancakes', icon: '🥞' },
    { id: 'waffles', name: 'Waffles', icon: '🧇' },
    { id: 'snacks', name: 'Snacks', icon: '🍟' },
  ];

  const menuItems = {
    desserts: [
      {
        name: 'Vanilla Cheesecake',
        description: 'Creamy vanilla cheesecake with a buttery graham cracker crust',
        calories: '320 cal',
        image: '/images/deserts/vanilla cheesecake no text.png',
        tags: ['Classic', 'Creamy']
      },
      {
        name: 'Chocolate Cheesecake',
        description: 'Rich chocolate cheesecake with chocolate ganache topping',
        calories: '380 cal',
        image: '/images/deserts/chocolate cheesecake no banner.png',
        tags: ['Rich', 'Chocolate']
      },
      {
        name: 'Biscoff Cheesecake',
        description: 'Decadent cheesecake with Biscoff cookie crust and caramel drizzle',
        calories: '350 cal',
        image: '/images/deserts/biscoff cheesecake.png',
        tags: ['Caramel', 'Cookie']
      },
      {
        name: 'Peanut Butter Cookie',
        description: 'Soft and chewy peanut butter cookies with a hint of vanilla',
        calories: '180 cal',
        image: '/images/deserts/peanut butter cookies.png',
        tags: ['Soft', 'Peanut Butter']
      },
      {
        name: 'Chocolate Tiramisu',
        description: 'Rich chocolate tiramisu with layers of coffee-soaked ladyfingers and chocolate mascarpone',
        calories: '300 cal',
        image: '/images/deserts/chocolate tiramisu.png',
        tags: ['Italian', 'Chocolate']
      },
      {
        name: 'Vanilla Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and vanilla mascarpone',
        calories: '280 cal',
        image: '/images/deserts/vanilla tiramisu no text.png',
        tags: ['Italian', 'Vanilla']
      },
      {
        name: 'Laddu',
        description: 'Traditional Indian sweet balls made with gram flour and sugar',
        calories: '150 cal',
        image: '/images/deserts/protein balls.png',
        tags: ['Traditional', 'Indian']
      },
      {
        name: 'Brownies',
        description: 'Rich and fudgy chocolate brownies with a perfect chewy texture',
        calories: '280 cal',
        image: '/images/deserts/brownies.jpeg',
        tags: ['Fudgy', 'Chocolate']
      }
    ],
    shakes: [
      {
        name: 'Cocoa Peanut Butter Shake',
        description: 'Rich chocolate and peanut butter blend with creamy texture',
        calories: '320 cal',
        image: '/images/pb choco raised.jpg',
        tags: ['Rich', 'Protein']
      },
      {
        name: 'Biscoff Shake',
        description: 'Smooth shake with Biscoff cookie flavor and caramel notes',
        calories: '280 cal',
        image: '/images/biscoff RAISED.jpg',
        tags: ['Cookie', 'Caramel']
      },
      {
        name: 'Cookie Shake',
        description: 'Creamy shake loaded with cookie pieces and vanilla ice cream',
        calories: '350 cal',
        image: '/images/cookie raised.jpg',
        tags: ['Cookie', 'Creamy']
      },
      {
        name: 'Apple Cinnamon Shake',
        description: 'Warm apple flavor with cinnamon spice and creamy texture',
        calories: '240 cal',
        image: '/images/apple RAISED.jpg',
        tags: ['Spiced', 'Fruity']
      },
      {
        name: 'Red Banana Shake',
        description: 'Smooth shake made with red bananas and natural sweetness',
        calories: '200 cal',
        image: '/images/red banana raised.jpg',
        tags: ['Natural', 'Fruity']
      },
      {
        name: 'Coffee Vanilla Shake',
        description: 'Perfect blend of coffee and vanilla with a smooth finish',
        calories: '260 cal',
        image: '/images/cold coffee - no shadow raised.jpg',
        tags: ['Coffee', 'Smooth']
      },
      {
        name: 'Double Chocolate Shake',
        description: 'Ultimate chocolate experience with double the chocolate flavor',
        calories: '380 cal',
        image: '/images/double choco raised.jpg',
        tags: ['Chocolate', 'Rich']
      },
      {
        name: 'Guava Honey Shake',
        description: 'Tropical guava flavor sweetened with natural honey',
        calories: '220 cal',
        image: '/images/guava raised.jpg',
        tags: ['Tropical', 'Natural']
      },
      {
        name: 'Caffe Mocha Shake',
        description: 'Rich coffee and chocolate combination with whipped cream',
        calories: '340 cal',
        image: '/images/caffe mocha with choco  RAISED.jpg',
        tags: ['Coffee', 'Chocolate']
      }
    ],
    pancakes: [
      {
        name: 'Banana PB Pancake',
        description: 'Fluffy pancakes with banana, peanut butter, dates, and seeds',
        calories: '320 cal',
        image: '/images/pb new.png',
        tags: ['Protein', 'Nutritious']
      },
      {
        name: 'Banana Chocolate Hazelnut Pancake',
        description: 'Decadent pancakes with banana, chocolate, and hazelnut spread',
        calories: '380 cal',
        image: '/images/dark and white new.png',
        tags: ['Decadent', 'Chocolate']
      },
      {
        name: 'Banana Pancake',
        description: 'Simple and delicious pancakes with fresh banana slices',
        calories: '240 cal',
        image: '/images/honey new.png',
        tags: ['Simple', 'Fruity']
      },
      {
        name: 'Dates Pancake',
        description: 'Sweet and nutritious pancakes with natural dates and honey',
        calories: '260 cal',
        image: '/images/dates.jpeg',
        tags: ['Natural', 'Sweet']
      },
      {
        name: 'Chocolate Pancake',
        description: 'Rich chocolate pancakes perfect for chocolate lovers',
        calories: '300 cal',
        image: '/images/choco new.png',
        tags: ['Chocolate', 'Rich']
      },
      {
        name: 'Berries Pancake',
        description: 'Light and fluffy pancakes topped with fresh mixed berries',
        calories: '220 cal',
        image: '/images/mixed berry new.png',
        tags: ['Fresh', 'Fruity']
      }
    ],
    waffles: [
      {
        name: 'Biscoff Waffle',
        description: 'Golden waffle with Biscoff cookie spread and caramel drizzle',
        image: '/images/biscoff new bg.png',
        tags: ['Cookie', 'Caramel']
      },
      {
        name: 'Brownie Waffle',
        description: 'Rich chocolate waffle with brownie chunks and chocolate sauce',
        image: '/images/brownie waffle new bg.png',
        tags: ['Chocolate', 'Rich']
      },
      {
        name: 'Double Choco Waffle',
        description: 'Ultimate chocolate waffle with double chocolate chips and chocolate syrup',
        image: '/images/double choco new bg.png',
        tags: ['Chocolate', 'Indulgent']
      },
      {
        name: 'Hazelnut Waffle',
        description: 'Crispy waffle with hazelnut spread and chopped hazelnuts',
        image: '/images/hazelnut new bg.png',
        tags: ['Nutty', 'Creamy']
      },
      {
        name: 'Peanut Butter Honey Waffle',
        description: 'Warm waffle with creamy peanut butter and natural honey drizzle',
        image: '/images/pb honey new bg.png',
        tags: ['Protein', 'Natural']
      },
      {
        name: 'Plain Honey Waffle',
        description: 'Simple golden waffle drizzled with pure natural honey',
        image: '/images/plain waffle.png',
        tags: ['Simple', 'Natural']
      },
      {
        name: 'Red Velvet White Chocolate Waffle',
        description: 'Decadent red velvet waffle with white chocolate chips and cream cheese drizzle',
        image: '/images/red velvet white.png',
        tags: ['Decadent', 'Creamy']
      }
    ],
    snacks: {
      'non-veg': [
        {
          name: 'Chicken Burger',
          description: 'Juicy grilled chicken patty with fresh lettuce, tomato, and special sauce in a soft bun',
          calories: '450 cal',
          image: '/images/snacks/chicken burger.png',
          tags: ['Juicy', 'Grilled']
        },
        {
          name: 'Popcorn Chicken and Fries Combo',
          description: 'Crispy popcorn chicken bites served with golden french fries and dipping sauce',
          calories: '380 cal',
          image: '/images/snacks/popcorn chicken and french fries.png',
          tags: ['Crispy', 'Combo']
        },
        {
          name: 'Popcorn Chicken',
          description: 'Bite-sized crispy chicken pieces seasoned with herbs and spices',
          calories: '280 cal',
          image: '/images/snacks/popcorn chicken.png',
          tags: ['Bite-sized', 'Seasoned']
        }
      ],
      'veg': [
        {
          name: 'Cheese Corn Pops',
          description: 'Crispy corn kernels coated with cheese and herbs, perfect as a snack',
          calories: '220 cal',
          image: '/images/snacks/cheese corn pops.png',
          tags: ['Cheesy', 'Crispy']
        },
        {
          name: 'French Fries',
          description: 'Crispy golden french fries seasoned with sea salt',
          calories: '200 cal',
          image: '/images/snacks/french fries.png',
          tags: ['Crispy', 'Classic']
        },
        {
          name: 'Smilies',
          description: 'Fun-shaped potato snacks with a crispy exterior and soft interior',
          calories: '180 cal',
          image: '/images/snacks/smilies.png',
          tags: ['Fun', 'Crispy']
        },
        {
          name: 'Veg Burger',
          description: 'Delicious vegetable patty with fresh lettuce, tomato, and special sauce in a soft bun',
          calories: '320 cal',
          image: '/images/snacks/veg burger.png',
          tags: ['Fresh', 'Healthy']
        }
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Indulge in our carefully crafted desserts, shakes, pancakes, waffles, and snacks made with premium ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-yellow-500 text-black shadow-lg transform scale-105'
                  : 'bg-black text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-black'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {activeCategory === 'snacks' ? (
          <div className="space-y-12">
            {/* Non-Veg Snacks */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Non-Vegetarian Snacks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.snacks['non-veg'].map((item, index) => (
                  <div
                    key={index}
                    className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-sm font-semibold text-black">{item.calories}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-yellow-500 mb-2">{item.name}</h3>
                      <p className="text-white mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center space-x-1 bg-yellow-500 text-black text-xs font-medium px-2.5 py-1 rounded-full"
                          >
                            <Leaf className="h-3 w-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Veg Snacks */}
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Vegetarian Snacks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.snacks.veg.map((item, index) => (
                  <div
                    key={index}
                    className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-sm font-semibold text-black">{item.calories}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-yellow-500 mb-2">{item.name}</h3>
                      <p className="text-white mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center space-x-1 bg-yellow-500 text-black text-xs font-medium px-2.5 py-1 rounded-full"
                          >
                            <Leaf className="h-3 w-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-black">{item.calories}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">{item.name}</h3>
                  <p className="text-white mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center space-x-1 bg-yellow-500 text-black text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        <Leaf className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;