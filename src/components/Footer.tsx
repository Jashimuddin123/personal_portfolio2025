import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Phone, MessageCircle, Facebook, Instagram, Twitter, Home, User, Briefcase, Eye, Star, Quote, Code, Globe, ShoppingCart, Palette, Zap, Smartphone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      url: "https://wa.me/8801820339433",
      color: "hover:text-green-600"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      url: "#",
      color: "hover:text-pink-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "#",
      color: "hover:text-gray-700"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:adnanmahmud3394@gmail.com",
      color: "hover:text-red-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "#",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/request-quote', label: 'Request Quote' }
  ];

  const serviceLinks = [
    { path: '/services/frontend-development', label: 'Frontend Development' },
    { path: '/services/shopify-theme-customize', label: 'Shopify Development' },
    { path: '/services/landing-page', label: 'Landing Pages' },
    { path: '/services/ecommerce-services', label: 'E-commerce Solutions' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-lg">JU</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                    Jashim Uddin
                  </h3>
                  <span className="text-sm text-gray-400 font-medium">Web Developer</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Outrank your competitors and elevate your business strategy with expert guidance. 
                Boost visibility, drive growth, and stay ahead in the market.
              </p>
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Free Call Now!
              </motion.a>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white border-b-2 border-blue-600 pb-2 inline-block">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                    className="group"
                  >
                    <Link
                      to={link.path}
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </motion.span>
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white border-b-2 border-red-600 pb-2 inline-block">Services</h4>
              <div className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                    className="group"
                  >
                    <Link
                      to={link.path}
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </motion.span>
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white border-b-2 border-green-600 pb-2 inline-block">Contact Info</h4>
              <div className="space-y-4 text-gray-300">
                <motion.p whileHover={{ x: 5 }} className="hover:text-white transition-colors duration-300">
                  <span className="font-semibold text-gray-400">Location:</span><br />
                  Rangunia, Chittagong, Bangladesh
                </motion.p>
                <motion.a
                  href="mailto:adnanmahmud3394@gmail.com"
                  whileHover={{ x: 5 }}
                  className="block hover:text-white transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-400">Email:</span><br />
                  adnanmahmud3394@gmail.com
                </motion.a>
                <motion.a
                  href="https://wa.me/8801820339433"
                  whileHover={{ x: 5 }}
                  className="block hover:text-white transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-400">Phone:</span><br />
                  +880 1820 339433
                </motion.a>
                <motion.p whileHover={{ x: 5 }} className="hover:text-white transition-colors duration-300">
                  <span className="font-semibold text-gray-400">Status:</span><br />
                  Available for new projects
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© 2025 Jashim Uddin. All rights reserved.</span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-400"
              >
                <Heart className="w-4 h-4 inline animate-pulse" />
              </motion.span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Made with React & Tailwind CSS</span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                title="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;