import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  review: string;
  rating: number;
}

const TestimonialSliderEnhanced = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "E-commerce Store Owner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      rating: 5,
      review: "Jashim delivered an exceptional Shopify store that exceeded all expectations. Sales increased by 40% since launch!"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Startup Founder",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      rating: 5,
      review: "Working with Jashim was fantastic. He created a stunning React.js application with excellent performance."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      rating: 5,
      review: "The landing page generated incredible results. Conversion rate improved by 60%!"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Restaurant Owner",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      rating: 5,
      review: "Jashim built our restaurant website with online ordering functionality. The site is fast and user-friendly!"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Fashion Brand Owner",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      rating: 5,
      review: "Our Shopify store customization was handled perfectly. Customer feedback has been overwhelmingly positive."
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Tech Startup CEO",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      rating: 5,
      review: "Jashim created our SaaS landing page with modern animations. The attention to detail is impressive."
    },
    {
      id: 7,
      name: "Sophia Martinez",
      title: "Boutique Owner",
      image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
      rating: 5,
      review: "The e-commerce solution provided was exactly what we needed. Our online sales tripled in 3 months!"
    },
    {
      id: 8,
      name: "Robert Anderson",
      title: "Digital Agency Owner",
      image: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg",
      rating: 5,
      review: "Professional, reliable, and talented. Jashim delivered our client projects on time and exceeded expectations."
    },
    {
      id: 9,
      name: "Jennifer Lee",
      title: "Real Estate Agent",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      rating: 5,
      review: "My property listing website looks amazing and works flawlessly. Highly recommended!"
    },
    {
      id: 10,
      name: "Daniel Brown",
      title: "Fitness Coach",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      rating: 5,
      review: "The online booking system integrated perfectly with my fitness website. Client bookings increased significantly."
    },
    {
      id: 11,
      name: "Amanda Taylor",
      title: "Jewelry Designer",
      image: "https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg",
      rating: 5,
      review: "Beautiful Shopify store with custom features. Jashim understood my vision and brought it to life perfectly."
    },
    {
      id: 12,
      name: "Christopher Davis",
      title: "Coffee Shop Owner",
      image: "https://images.pexels.com/photos/3182748/pexels-photo-3182748.jpeg",
      rating: 5,
      review: "Our cafe website with online ordering is exactly what we needed. Sales have never been better!"
    },
    {
      id: 13,
      name: "Rachel Green",
      title: "Interior Designer",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg",
      rating: 5,
      review: "Portfolio website that showcases my work beautifully. I get inquiries daily from potential clients!"
    },
    {
      id: 14,
      name: "Kevin White",
      title: "SaaS Founder",
      image: "https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg",
      rating: 5,
      review: "Landing page conversion optimization was spot on. Our signup rate increased by 85%!"
    },
    {
      id: 15,
      name: "Michelle Clark",
      title: "Makeup Artist",
      image: "https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg",
      rating: 5,
      review: "Website design is elegant and professional. Booking system works perfectly for my clients."
    },
    {
      id: 16,
      name: "Steven Harris",
      title: "Consulting Firm Owner",
      image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg",
      rating: 5,
      review: "Corporate website with lead generation forms. Professional execution from start to finish!"
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div className="overflow-hidden">
        <motion.div
          animate={{
            x: `${-currentIndex * (100 / itemsPerView)}%`
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex"
          style={{ width: `${(testimonials.length / itemsPerView) * 100}%` }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="px-4"
              style={{ width: `${100 / testimonials.length * itemsPerView}%` }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-20" />
                </div>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 min-h-[80px]">
                  "{testimonial.review}"
                </p>

                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Author Info */}
                <div className="flex items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-primary dark:text-primary-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary-700 transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      )}

      {currentIndex < maxIndex && (
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary-700 transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      )}

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-300 dark:bg-gray-600 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSliderEnhanced;
