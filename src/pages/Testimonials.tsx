import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../components/Banner';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "E-commerce Store Owner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      rating: 5,
      review: "Jashim delivered an exceptional Shopify store that exceeded all my expectations. The design is beautiful, mobile-responsive, and the custom features work perfectly. Sales have increased by 40% since launch!"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Startup Founder",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      rating: 5,
      review: "Working with Jashim was a fantastic experience. He created a stunning React.js application for our startup with clean code and excellent performance. His communication throughout the project was outstanding."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      rating: 5,
      review: "The landing page Jashim created for our campaign generated incredible results. The conversion rate improved by 60% and the design perfectly captured our brand identity. Highly recommended!"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Restaurant Owner",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      rating: 5,
      review: "Jashim built our restaurant website with online ordering functionality. The site is fast, user-friendly, and has helped us increase online orders significantly. Professional work and great support!"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Fashion Brand Owner",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      rating: 5,
      review: "Our Shopify store customization was handled perfectly by Jashim. He understood our vision and delivered a unique, high-performing e-commerce site. Customer feedback has been overwhelmingly positive."
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Tech Startup CEO",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      rating: 5,
      review: "Jashim created our SaaS landing page with modern animations and perfect responsive design. The attention to detail and technical expertise is impressive. We've seen great conversion improvements."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Banner
        title="Client Testimonials"
        description="Don't just take my word for it. Here's what my clients say about working with me. Real feedback from real projects that showcase the quality and dedication I bring to every collaboration."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        imageAlt="Happy clients testimonials"
      />

      {/* Main Testimonial Slider */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-gray-900 mb-6"
              >
                What My Clients Say
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '6rem' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded-full"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto"
              >
                Professional testimonials from satisfied clients worldwide
              </motion.p>
            </motion.div>

            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  {/* Decorative Quote */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Client Image */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                      className="flex-shrink-0"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-full animate-pulse opacity-20"></div>
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
                        />
                      </div>
                    </motion.div>

                    {/* Testimonial Content */}
                    <div className="flex-1 text-center md:text-left">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center md:justify-start mb-4"
                      >
                        {renderStars(testimonials[currentIndex].rating)}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative mb-8"
                      >
                        <p className="text-xl text-gray-700 leading-relaxed italic font-medium">
                          "{testimonials[currentIndex].review}"
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="border-t border-gray-200 pt-4"
                      >
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-blue-600 font-semibold text-lg">
                          {testimonials[currentIndex].title}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 w-12 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400 shadow-md'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">All Reviews</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.title}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    "{testimonial.review}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Client Satisfaction</h2>
              <p className="text-blue-100">Numbers that speak for themselves</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Happy Clients" },
                { number: "100%", label: "Satisfaction Rate" },
                { number: "5.0", label: "Average Rating" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;