import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/Banner';
import { ShoppingCart, CreditCard, BarChart, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const EcommerceServices = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Complete Store Setup",
      description: "Full e-commerce store development from concept to launch",
      features: ["Store configuration", "Product catalog setup", "Payment gateway integration", "Shipping configuration"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Secure payment processing with multiple payment options",
      features: ["Stripe integration", "PayPal setup", "Apple Pay", "Google Pay"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Tracking",
      description: "Comprehensive tracking and analytics for business insights",
      features: ["Google Analytics", "Facebook Pixel", "Conversion tracking", "Sales reports"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Store Optimization",
      description: "Performance and conversion optimization for better results",
      features: ["Speed optimization", "SEO setup", "Conversion optimization", "Mobile optimization"]
    }
  ];

  const platforms = [
    {
      name: "Shopify",
      description: "Complete Shopify store development and customization",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      features: ["Theme customization", "App integration", "Liquid development", "Store migration"]
    },
    {
      name: "WooCommerce",
      description: "WordPress-based e-commerce solutions",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      features: ["Custom themes", "Plugin development", "Payment setup", "Performance optimization"]
    },
    {
      name: "Custom E-commerce",
      description: "Bespoke e-commerce solutions built from scratch",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      features: ["React.js frontend", "Node.js backend", "Custom features", "Scalable architecture"]
    }
  ];

  const features = [
    {
      title: "Inventory Management",
      description: "Advanced inventory tracking and management",
      icon: "📦"
    },
    {
      title: "Order Management",
      description: "Streamlined order processing and fulfillment",
      icon: "📋"
    },
    {
      title: "Customer Accounts",
      description: "User registration and account management",
      icon: "👤"
    },
    {
      title: "Multi-Currency",
      description: "Support for multiple currencies and regions",
      icon: "💱"
    },
    {
      title: "Email Marketing",
      description: "Automated email campaigns and newsletters",
      icon: "📧"
    },
    {
      title: "Mobile App",
      description: "Mobile app development for iOS and Android",
      icon: "📱"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your business needs and target market"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and design mockups"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your e-commerce store with modern technologies"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and successful store launch"
    },
    {
      step: "05",
      title: "Marketing Setup",
      description: "SEO, analytics, and marketing tool integration"
    },
    {
      step: "06",
      title: "Training & Support",
      description: "Staff training and ongoing technical support"
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Complete E-commerce Solutions"
        description="End-to-end e-commerce development services from store setup to marketing integration. I build high-converting online stores that drive sales and grow your business with modern technology and proven strategies."
        image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
        imageAlt="E-commerce solutions"
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Platforms</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    
                    <div className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Features</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Process</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Packages</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter Store",
                  price: "$999",
                  features: [
                    "Basic store setup",
                    "Up to 50 products",
                    "Payment integration",
                    "Mobile responsive",
                    "Basic SEO setup"
                  ]
                },
                {
                  name: "Professional Store",
                  price: "$1999",
                  features: [
                    "Advanced store setup",
                    "Unlimited products",
                    "Custom design",
                    "Advanced features",
                    "Marketing integration",
                    "Analytics setup"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise Solution",
                  price: "$3999",
                  features: [
                    "Custom development",
                    "Advanced integrations",
                    "Multi-store setup",
                    "Custom features",
                    "Priority support",
                    "Training included"
                  ]
                }
              ].map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-br from-blue-50 to-red-50 border-2 border-blue-600' 
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">One-time payment</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white hover:from-blue-700 hover:to-red-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Store?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's build a high-converting e-commerce store that drives sales and grows your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Your Store
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceServices;