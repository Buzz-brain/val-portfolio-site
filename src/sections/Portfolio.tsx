import React, { useState } from 'react';
import { Eye } from 'lucide-react';

// Portfolio item interface
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const Portfolio: React.FC = () => {
  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Traditional Attire",
      category: "Traditional",
      imageUrl: "https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Modern Suit Design",
      category: "Formal",
      imageUrl: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Casual Collection",
      category: "Casual",
      imageUrl: "https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Evening Gown",
      category: "Formal",
      imageUrl: "https://images.pexels.com/photos/5886045/pexels-photo-5886045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Summer Collection",
      category: "Casual",
      imageUrl: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "Wedding Attire",
      category: "Wedding",
      imageUrl: "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <h2 className="section-title">My <span className="text-primary">Portfolio</span></h2>
        <p className="section-subtitle">
          Explore my collection of fashion designs and creative work
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 mb-2 text-sm font-medium transition-colors rounded-full capitalize ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="group portfolio-item">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <h3 className="mb-2 text-xl font-medium text-white">{item.title}</h3>
                  <span className="px-3 py-1 mb-4 text-xs text-white bg-primary rounded-full">{item.category}</span>
                  <button className="flex items-center px-4 py-2 text-sm text-white transition-colors bg-accent rounded-full hover:bg-accent/90">
                    <Eye size={16} className="mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;