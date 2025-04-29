import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center min-h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(44,62,80,0.7)), url('https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Fashion Design <span className="text-accent">& Creativity</span>
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Transforming creative visions into stunning designs. 
            Crafting clothes with precision, artistic vision, and attention to detail.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="btn btn-primary bg-accent hover:bg-accent/90">
              View Portfolio
            </a>
            <a href="#contact" className="flex items-center text-white group">
              Contact Me
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 text-white transition-transform bg-primary rounded-full hover:translate-y-1"
          aria-label="Scroll to About section"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;