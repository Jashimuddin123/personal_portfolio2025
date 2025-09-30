import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/Banner';
import { Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const BackendDevelopment = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful APIs and GraphQL endpoints for seamless data communication",
      features: ["REST API design", "GraphQL implementation", "API documentation", "Version control"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Efficient database architecture and optimization for performance",
      features: ["Database modeling", "Query optimization", "Data migration", "Backup strategies"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentication & Security",
      description: "Secure user authentication and authorization systems",
      features: ["JWT authentication", "OAuth integration", "Role-based access", "Data encryption"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Fast and scalable backend solutions for high traffic",
      features: ["Caching strategies", "Load balancing", "Code optimization", "Monitoring setup"]
    }
  ];

  const technologies = [
    {
      category: "Runtime & Languages",
      items: ["Node.js", "JavaScript", "TypeScript", "Python"]
    },
    {
      category: "Frameworks",
      items: ["Express.js", "Fastify", "NestJS", "Koa.js"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Tools & Services",
      items: ["Docker", "AWS", "Nginx", "PM2"]
    }
  ];

  const features = [
    {
      title: "Scalable Architecture",
      description: "Built to handle growth and increased traffic",
      icon: "🚀"
    },
    {
      title: "Security First",
      description: "Implementing best security practices",
      icon: "🔒"
    },
    {
      title: "API Documentation",
      description: "Comprehensive API documentation",
      icon: "📚"
    },
    {
      title: "Testing Coverage",
      description: "Unit and integration testing",
      icon: "🧪"
    },
    {
      title: "Monitoring & Logging",
      description: "Real-time monitoring and error tracking",
      icon: "📊"
    },
    {
      title: "Cloud Deployment",
      description: "Deploy to AWS, Heroku, or DigitalOcean",
      icon: "☁️"
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Backend Development Services"
        description="Robust backend solutions using Node.js, Express, and modern databases. I build scalable APIs, secure authentication systems, and high-performance server-side applications that power your frontend."
        image="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
        imageAlt="Backend development"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Backend Services</h2>
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

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Stack</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Get</h2>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirements Analysis",
                  description: "Understanding your backend needs and architecture requirements"
                },
                {
                  step: "02",
                  title: "Database Design",
                  description: "Designing efficient database schema and relationships"
                },
                {
                  step: "03",
                  title: "API Development",
                  description: "Building robust APIs with proper error handling"
                },
                {
                  step: "04",
                  title: "Testing & Deployment",
                  description: "Comprehensive testing and cloud deployment"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Backend Development Packages</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic API",
                  price: "$599",
                  features: [
                    "Simple REST API",
                    "Basic authentication",
                    "Database integration",
                    "API documentation",
                    "Basic testing"
                  ]
                },
                {
                  name: "Advanced Backend",
                  price: "$999",
                  features: [
                    "Complex API endpoints",
                    "Advanced authentication",
                    "Multiple databases",
                    "File upload handling",
                    "Comprehensive testing",
                    "Performance optimization"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise Solution",
                  price: "$1499",
                  features: [
                    "Microservices architecture",
                    "Advanced security",
                    "Real-time features",
                    "Monitoring & logging",
                    "Load balancing",
                    "24/7 support"
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
              <h2 className="text-4xl font-bold text-white mb-6">Need a Robust Backend?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's build a scalable, secure backend that powers your application
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

export default BackendDevelopment;