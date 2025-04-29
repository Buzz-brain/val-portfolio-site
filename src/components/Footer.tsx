import React from 'react';
import { Phone, Mail, MapPin, Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-secondary text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <Scissors size={24} className="text-accent" />
              <span className="text-xl font-semibold font-playfair">
                Valentine
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="mb-4 text-gray-300">
              Fashion design meets creativity. Bringing your vision to life through unique designs and craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 transition-colors hover:text-accent">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 transition-colors hover:text-accent">About</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 transition-colors hover:text-accent">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 transition-colors hover:text-accent">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 transition-colors hover:text-accent">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 text-accent" />
                <span className="text-gray-300">No.4 umuakali Naze Owerri North L.G.A</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-accent" />
                <a href="tel:+2347015694591" className="text-gray-300 hover:text-accent">07015694591</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-accent" />
                <a href="mailto:valentineohawuchi7@gmail.com" className="text-gray-300 hover:text-accent">
                  valentineohawuchi7@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ohawuchi Nnaemeka Valentine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;