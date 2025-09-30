import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/Banner';
import { Code, Layers, Zap, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const ShopifyLiquidDevelopment = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Liquid Templates",
      description: "Bespoke Liquid templates for unique store functionality",
      features: ["Product templates", "Collection templates", "Page templates", "Email templates"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Dynamic Sections",
      description: "Flexible sections that can be customized from the theme editor",
      features: ["Hero sections", "Product showcases", "Testimonial sections", "Custom content blocks"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Functionality",
      description: "Advanced features using Liquid logic and filters",
      features: ["Product filters", "Dynamic pricing", "Inventory management", "Custom calculations"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimized Liquid code for faster loading times",
      features: ["Code optimization", "Lazy loading", "Efficient loops", "Reduced API calls"]
    }
  ];

  const liquidFeatures = [
    {
      title: "Product Variants",
      description: "Advanced variant selection with custom options",
      code: `{% for variant in product.variants %}
  <option value="{{ variant.id }}" 
          {% unless variant.available %}disabled{% endunless %}>
    {{ variant.title }} - {{ variant.price | money }}
  </option>
{% endfor %}`
    },
    {
      title: "Dynamic Collections",
      description: "Smart collection filtering and sorting",
      code: `{% assign filtered_products = collection.products | where: 'available' %}
{% for product in filtered_products limit: 12 %}
  {% include 'product-card' %}
{% endfor %}`
    },
    {
      title: "Custom Metafields",
      description: "Display custom product information",
      code: `{% if product.metafields.custom.specifications %}
  <div class="specifications">
    {{ product.metafields.custom.specifications | metafield_tag }}
  </div>
{% endif %}`
    }
  ];

  const projects = [
    {
      title: "Multi-Variant Product Page",
      description: "Complex product page with size charts, color swatches, and inventory tracking",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      features: ["Dynamic pricing", "Inventory alerts", "Size guide", "Color variants"]
    },
    {
      title: "Custom Collection Filter",
      description: "Advanced filtering system with price ranges, brands, and attributes",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      features: ["AJAX filtering", "Price ranges", "Brand filters", "Attribute sorting"]
    },
    {
      title: "Dynamic Homepage",
      description: "Customizable homepage with drag-and-drop sections",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      features: ["Hero sections", "Product grids", "Testimonials", "Custom content"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Shopify Liquid Development"
        description="Expert Shopify Liquid development for custom functionality and unique store features. I create powerful, efficient Liquid templates and sections that enhance your store's capabilities and user experience."
        image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
        imageAlt="Shopify Liquid development"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Liquid Development Services</h2>
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

      {/* Liquid Code Examples */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Liquid Code Examples</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="space-y-8">
              {liquidFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <div className="flex items-center text-blue-600">
                        <Code className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Liquid Template Code</span>
                      </div>
                    </div>
                    <div className="bg-gray-900 p-8 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{feature.code}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Liquid Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
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

      {/* Liquid Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Can Build</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Product Pages",
                  description: "Enhanced product displays with advanced features",
                  icon: "📦"
                },
                {
                  title: "Dynamic Collections",
                  description: "Smart filtering and sorting systems",
                  icon: "📋"
                },
                {
                  title: "Cart Enhancements",
                  description: "Advanced cart functionality and upsells",
                  icon: "🛒"
                },
                {
                  title: "Search Features",
                  description: "Custom search with filters and suggestions",
                  icon: "🔍"
                },
                {
                  title: "Customer Accounts",
                  description: "Enhanced customer portal and dashboards",
                  icon: "👤"
                },
                {
                  title: "Email Templates",
                  description: "Custom transactional email designs",
                  icon: "📧"
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Liquid Development Packages</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic Liquid",
                  price: "$299",
                  features: [
                    "Simple template modifications",
                    "Basic Liquid logic",
                    "Product page enhancements",
                    "Collection page updates",
                    "2 revisions"
                  ]
                },
                {
                  name: "Advanced Liquid",
                  price: "$599",
                  features: [
                    "Custom sections",
                    "Dynamic functionality",
                    "Advanced filters",
                    "Custom calculations",
                    "Performance optimization",
                    "5 revisions"
                  ],
                  popular: true
                },
                {
                  name: "Custom Development",
                  price: "$999",
                  features: [
                    "Complex custom features",
                    "Multi-template system",
                    "Advanced integrations",
                    "Custom admin tools",
                    "Unlimited revisions",
                    "30-day support"
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
              <h2 className="text-4xl font-bold text-white mb-6">Need Custom Liquid Development?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's build powerful custom features for your Shopify store with expert Liquid development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Development
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

export default ShopifyLiquidDevelopment;