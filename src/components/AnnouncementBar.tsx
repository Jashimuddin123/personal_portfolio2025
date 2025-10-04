import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCall = () => {
    window.open('tel:+8801820339433', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:adnanmahmud3394@gmail.com', '_self');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white py-2 px-4 text-sm"
      style={{ position: 'relative', zIndex: 60 }}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        {/* Left Side - Contact Info */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={handleCall}
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>+880 1820 339433</span>
          </button>
          <button 
            onClick={handleEmail}
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>adnanmahmud3394@gmail.com</span>
          </button>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors duration-300">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-300">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;