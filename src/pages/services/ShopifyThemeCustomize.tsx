import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/Banner';
import { ShoppingCart, Palette, Smartphone, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const ShopifyThemeCustomize = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Theme Design",
      description: "Unique Shopify themes tailored to your brand identity",
      features: ["Brand-focused design", "Custom layouts", "Unique styling", "Logo integration"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimization",
      description: "Fully responsive themes that work perfectly on all devices",
      features: ["Mobile-first design", "Touch-friendly interface", "Fast mobile loading", "Cross-device testing"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Features",
      description: "Advanced shopping features to boost sales and conversions",
      features: ["Product variants", "Quick view", "Wishlist functionality", "Advanced filters"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Fast-loading themes optimized for better user experience",
      features: ["Speed optimization", "Image compression", "Code minification", "Lazy loading"]
    }
  ];

  const customizations = [
    {
      title: "Header & Navigation",
      description: "Custom header design with mega menus and search functionality",
      icon: "🧭"
    },
    {
      title: "Product Pages",
      description: "Enhanced product pages with galleries, reviews, and recommendations",
      icon: "📦"
    },
    {
      title: "Collection Pages",
      description: "Advanced filtering, sorting, and pagination for better browsing",
      icon: "📋"
    },
    {
      title: "Cart & Checkout",
      description: "Streamlined cart and checkout process for higher conversions",
      icon: "🛒"
    },
    {
      title: "Footer & Contact",
      description: "Custom footer with contact forms and social media integration",
      icon: "📞"
    },
    {
      title: "Blog & Content",
      description: "Custom blog layouts and content sections for better engagement",
      icon: "📝"
    }
  ];

  const themes = [
    {
      name: "Fashion Store",
      description: "Modern theme for fashion and apparel stores",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      features: ["Product zoom", "Size guide", "Color swatches", "Lookbook"]
    },
    {
      name: "Electronics Shop",
      description: "Tech-focused theme for electronics and gadgets",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      features: ["Spec comparison", "Product videos", "Reviews system", "Warranty info"]
    },
    {
      name: "Beauty & Cosmetics",
      description: "Elegant theme for beauty and cosmetics brands",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      features: ["Ingredient lists", "Skin tone matcher", "Tutorial videos", "Before/after"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Shopify Theme Customization"
        description="Professional Shopify theme customization services to create unique, high-converting online stores. I transform existing themes or build custom solutions that perfectly match your brand and business needs."
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        imageAlt="Shopify theme customization"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customization Services</h2>
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

      {/* Customization Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Can Customize</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customizations.map((custom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{custom.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{custom.title}</h3>
                  <p className="text-gray-600">{custom.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Theme Examples */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Theme Examples</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {themes.map((theme, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{theme.name}</h3>
                    <p className="text-gray-600 mb-4">{theme.description}</p>
                    
                    <div className="space-y-2">
                      {theme.features.map((feature, featureIndex) => (
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customization Process</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Theme Analysis",
                  description: "Analyzing your current theme and requirements"
                },
                {
                  step: "02",
                  title: "Design Planning",
                  description: "Creating customization plan and mockups"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Implementing custom features and styling"
                },
                {
                  step: "04",
                  title: "Testing & Launch",
                  description: "Testing across devices and launching live"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customization Packages</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic Customization",
                  price: "$399",
                  features: [
                    "Color scheme changes",
                    "Font customization",
                    "Logo integration",
                    "Basic layout changes",
                    "Mobile optimization"
                  ]
                },
                {
                  name: "Advanced Customization",
                  price: "$699",
                  features: [
                    "Custom sections",
                    "Product page enhancements",
                    "Advanced styling",
                    "Custom functionality",
                    "Performance optimization",
                    "SEO improvements"
                  ],
                  popular: true
                },
                {
                  name: "Complete Redesign",
                  price: "$1199",
                  features: [
                    "Full theme redesign",
                    "Custom features",
                    "Advanced animations",
                    "Multi-language support",
                    "App integrations",
                    "Ongoing support"
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Store?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's create a unique Shopify theme that perfectly represents your brand
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Customization
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopifyThemeCustomize;