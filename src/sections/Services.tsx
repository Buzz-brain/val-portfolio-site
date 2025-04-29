import React from 'react';
import { Scissors, PenTool, ShoppingBag, Shirt, Camera } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Custom Fashion Design",
      description: "Unique clothing designs tailored to your personal style and preferences.",
      icon: <Scissors size={40} className="text-accent" />
    },
    {
      id: 2,
      title: "Photo Editing",
      description: "Professional photo editing to enhance your fashion portfolio and marketing materials.",
      icon: <Camera size={40} className="text-accent" />
    },
    {
      id: 3,
      title: "Pattern Making",
      description: "Create precise patterns that ensure perfect fit and style for your garments.",
      icon: <PenTool size={40} className="text-accent" />
    },
    {
      id: 4,
      title: "Wardrobe Consulting",
      description: "Get expert advice on styling and building a wardrobe that reflects your personality.",
      icon: <ShoppingBag size={40} className="text-accent" />
    },
    {
      id: 5,
      title: "Alterations & Repairs",
      description: "Professional alterations to ensure your garments fit perfectly.",
      icon: <Shirt size={40} className="text-accent" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">My <span className="text-primary">Services</span></h2>
        <p className="section-subtitle">
          Discover the range of fashion design and creative services I offer
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="p-6 bg-white rounded-lg shadow-md service-card">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="p-8 mt-16 text-center bg-primary rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-semibold text-white font-playfair">Ready to create something amazing?</h3>
          <p className="mb-6 text-gray-200">
            Let's collaborate to bring your fashion ideas to life with creativity and craftsmanship.
          </p>
          <a href="#contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;