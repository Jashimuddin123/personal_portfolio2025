import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, Code, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const serviceItems = [
    { path: '/services/landing-page', label: 'Landing Page' },
    { path: '/services/frontend-development', label: 'Frontend Development' },
    { path: '/services/backend-development', label: 'Backend Development' },
    { path: '/services/shopify-theme-customize', label: 'Shopify Theme Customize' },
    { path: '/services/shopify-liquid-development', label: 'Shopify Liquid Development' },
    { path: '/services/ecommerce-services', label: 'E-commerce Services' }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-jashim-uddin.pdf';
    link.download = 'Jashim-Uddin-CV.pdf';
    link.click();
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-100"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Attractive Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center"
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-blue-600 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                Jashim Uddin
              </motion.span>
              <span className="text-xs text-gray-500 -mt-1">Web Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 group ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            
            <Link
              to="/about"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 group ${
                location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              About Me
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`relative flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 group ${
                location.pathname.startsWith('/services') ? 'text-blue-600' : 'text-gray-700'
              }`}>
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                  location.pathname.startsWith('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 group ${
                location.pathname === '/portfolio' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Portfolio
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                location.pathname === '/portfolio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            <Link
              to="/testimonials"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 group ${
                location.pathname === '/testimonials' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Testimonials
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                location.pathname === '/testimonials' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            <Link
              to="/request-quote"
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 group ${
                location.pathname === '/request-quote' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Request a Quote
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                location.pathname === '/request-quote' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            {/* Download CV Button */}
            <button
              onClick={downloadCV}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </button>
          </div>

          {/* Connect Button */}
          <Link
            to="/contact"
            className="hidden lg:block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Sparkles className="w-4 h-4 inline mr-2" />
            Connect
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 py-4 border-t border-gray-100"
            >
              <div className="space-y-2">
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200">
                  Home
                </Link>
                <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200">
                  About Me
                </Link>
                
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/portfolio" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200">
                  Portfolio
                </Link>
                <Link to="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200">
                  Testimonials
                </Link>
                <Link to="/request-quote" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200">
                  Request a Quote
                </Link>
                
                <div className="flex space-x-2 px-4 pt-2">
                  <button
                    onClick={downloadCV}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </button>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;