import React, { useState, useEffect } from 'react';
import { MapPin, Download, ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Front-End Developer',
    'Shopify Expert',
    'React.js Specialist',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Introduction */}
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                Jashim Uddin
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-600 mb-4 h-12 flex items-center justify-center">
              <Code className="w-8 h-8 mr-3 text-blue-600 animate-spin-slow" />
              <span className="font-semibold">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              "Bringing design to life with code and creativity"
            </p>
            
            <div className="flex items-center justify-center text-gray-500 mb-12">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <span>Rangunia, Chittagong, Bangladesh</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp animation-delay-300">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fadeInUp animation-delay-600">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;