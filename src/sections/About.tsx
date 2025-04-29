import React from 'react';
import { Scissors, Image, Ribbon } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://res.cloudinary.com/df2q6gyuq/image/upload/v1745911569/val_rhgujg.jpg" 
                alt="Ohawuchi Nnaemeka Valentine in his workshop" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute w-32 h-32 bg-accent rounded-full -top-4 -left-4 -z-10"></div>
            <div className="absolute w-32 h-32 bg-primary rounded-full -bottom-4 -right-4 -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-slide-up">
            <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl font-playfair">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="mb-6 text-gray-700">
              I'm Ohawuchi Nnaemeka Valentine, a passionate fashion designer and photo editor with a creative mindset 
              and a keen eye for detail. My journey in fashion design has been driven by a desire to transform creative visions into stunning realities.
            </p>
            <p className="mb-8 text-gray-700">
              I specialize in crafting and designing clothes that not only look beautiful but also express the unique personality of each client. 
              With a combination of creative thinking, skilled craftsmanship, and modern techniques, I bring design concepts to life.
            </p>

            {/* Skills */}
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center p-4 text-center bg-white rounded-lg shadow-sm">
                <Scissors size={32} className="mb-2 text-primary" />
                <h3 className="text-lg font-medium">Fashion Design</h3>
              </div>
              <div className="flex flex-col items-center p-4 text-center bg-white rounded-lg shadow-sm">
                <Image size={32} className="mb-2 text-primary" />
                <h3 className="text-lg font-medium">Photo Editing</h3>
              </div>
              <div className="flex flex-col items-center p-4 text-center bg-white rounded-lg shadow-sm">
                <Ribbon size={32} className="mb-2 text-primary" />
                <h3 className="text-lg font-medium">Tailoring</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;