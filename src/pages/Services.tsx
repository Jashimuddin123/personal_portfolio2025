import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { Code, ShoppingCart, Palette, Globe, Smartphone, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Page Development",
      description: "High-converting landing pages designed to capture leads and drive conversions.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Conversion Focused"],
      link: "/services/landing-page",
      color: "blue"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern React.js applications with beautiful UI and seamless user experience.",
      features: ["React.js & Next.js", "Responsive Design", "Modern UI/UX", "Performance Optimized"],
      link: "/services/frontend-development",
      color: "red"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust backend solutions with APIs, databases, and server-side functionality.",
      features: ["Node.js & Express", "Database Design", "API Development", "Authentication"],
      link: "/services/backend-development",
      color: "blue"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Shopify Theme Customize",
      description: "Custom Shopify theme development and existing theme customization.",
      features: ["Custom Themes", "Liquid Development", "Mobile Responsive", "Speed Optimization"],
      link: "/services/shopify-theme-customize",
      color: "red"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Shopify Liquid Development",
      description: "Expert Shopify Liquid templating for custom functionality and design.",
      features: ["Liquid Templates", "Custom Sections", "Dynamic Content", "Theme Functions"],
      link: "/services/shopify-liquid-development",
      color: "blue"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "E-commerce Services",
      description: "Complete e-commerce solutions from store setup to optimization.",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Analytics Setup"],
      link: "/services/ecommerce-services",
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Professional Web Development Services"
        description="Comprehensive web development solutions tailored to your business needs. From frontend development to complete e-commerce solutions, I deliver quality results that drive success."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        imageAlt="Web development services"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                Specialized services designed to help your business succeed online
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-${service.color}-600`}
                >
                  <div className={`w-16 h-16 bg-${service.color}-100 text-${service.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className={`w-2 h-2 bg-${service.color}-600 rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.link}
                    className={`inline-flex items-center text-${service.color}-600 font-semibold hover:text-${service.color}-700 transition-colors duration-300 group-hover:translate-x-1`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:animate-bounce" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose My Services?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Assurance",
                  description: "Every project is thoroughly tested and optimized for performance",
                  icon: "✅"
                },
                {
                  title: "Timely Delivery",
                  description: "Projects completed on time with regular progress updates",
                  icon: "⏰"
                },
                {
                  title: "Ongoing Support",
                  description: "Post-launch support and maintenance for peace of mind",
                  icon: "🛠️"
                },
                {
                  title: "Modern Technologies",
                  description: "Using the latest tools and frameworks for best results",
                  icon: "🚀"
                },
                {
                  title: "Responsive Design",
                  description: "Mobile-first approach ensuring great experience on all devices",
                  icon: "📱"
                },
                {
                  title: "SEO Optimized",
                  description: "Built with search engine optimization best practices",
                  icon: "🔍"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how I can help bring your ideas to life with professional web development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;