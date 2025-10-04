import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  review: string;
}

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "E-commerce Store Owner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      review: "Jashim delivered an exceptional Shopify store that exceeded all expectations. Sales increased by 40% since launch!"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Startup Founder",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      review: "Working with Jashim was fantastic. He created a stunning React.js application with excellent performance."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      review: "The landing page generated incredible results. Conversion rate improved by 60%!"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Restaurant Owner",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      review: "Jashim built our restaurant website with online ordering functionality. The site is fast and user-friendly!"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Fashion Brand Owner",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      review: "Our Shopify store customization was handled perfectly. Customer feedback has been overwhelmingly positive."
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.review}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(maxIndex + 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-blue-600 to-red-600 w-8'
                : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
