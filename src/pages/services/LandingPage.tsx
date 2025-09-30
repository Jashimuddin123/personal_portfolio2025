import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/Banner';
import { Globe, Zap, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Conversion Focused",
      description: "Designed to convert visitors into customers with strategic placement of CTAs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Loading",
      description: "Optimized for speed with clean code and compressed assets"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Mobile Responsive",
      description: "Perfect display on all devices from mobile to desktop"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your goals, target audience, and requirements"
    },
    {
      step: "02", 
      title: "Design & Wireframe",
      description: "Creating wireframes and design mockups for approval"
    },
    {
      step: "03",
      title: "Development",
      description: "Coding the landing page with modern technologies"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to your domain"
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "$299",
      features: [
        "Single page design",
        "Mobile responsive",
        "Contact form",
        "Basic SEO setup",
        "2 revisions"
      ]
    },
    {
      name: "Standard",
      price: "$499",
      features: [
        "Multi-section design",
        "Advanced animations",
        "Lead capture forms",
        "Analytics integration",
        "5 revisions",
        "Speed optimization"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$799",
      features: [
        "Custom design",
        "Advanced functionality",
        "A/B testing setup",
        "CRM integration",
        "Unlimited revisions",
        "30-day support"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="High-Converting Landing Pages"
        description="Professional landing page development that drives results. I create conversion-focused pages that capture leads, showcase your products, and grow your business with modern design and proven strategies."
        image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
        imageAlt="Landing page development"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose My Landing Pages?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Development Process</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
              <p className="text-xl text-gray-600 mt-6">Choose the package that fits your needs</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
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

      {/* Technologies Used */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies I Use</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "HTML5", icon: "🔶" },
                { name: "CSS3", icon: "🔷" },
                { name: "JavaScript", icon: "🟨" },
                { name: "React.js", icon: "⚛️" },
                { name: "Tailwind CSS", icon: "🎨" },
                { name: "GSAP", icon: "🎭" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{tech.icon}</div>
                  <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.name}
                  </span>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Conversions?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's create a high-converting landing page that drives results for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Your Project
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

export default LandingPage;