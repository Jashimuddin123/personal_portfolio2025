import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/Banner';
import { Code, Smartphone, Zap, Palette, CheckCircle, ArrowRight } from 'lucide-react';

const FrontendDevelopment = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "React.js Development",
      description: "Modern React applications with hooks, context, and best practices",
      features: ["Component-based architecture", "State management", "API integration", "Performance optimization"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices",
      features: ["Mobile optimization", "Cross-browser compatibility", "Flexible layouts", "Touch-friendly interfaces"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Fast-loading applications with optimized code and assets",
      features: ["Code splitting", "Lazy loading", "Image optimization", "Bundle optimization"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern UI/UX",
      description: "Beautiful interfaces with smooth animations and interactions",
      features: ["Custom animations", "Interactive elements", "Modern design patterns", "Accessibility features"]
    }
  ];

  const technologies = [
    {
      category: "Core Technologies",
      items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Next.js", "Vue.js", "Angular"]
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Bootstrap", "Styled Components", "SASS/SCSS"]
    },
    {
      category: "Tools & Build",
      items: ["Webpack", "Vite", "NPM/Yarn", "Git"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with cart, checkout, and user accounts",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      tech: ["React.js", "Redux", "Stripe API"]
    },
    {
      title: "Dashboard Application",
      description: "Admin dashboard with charts, tables, and real-time data",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      tech: ["React.js", "Chart.js", "REST API"]
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with animations and responsive design",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Frontend Development Services"
        description="Professional frontend development using modern technologies like React.js, Next.js, and cutting-edge tools. I create responsive, fast, and user-friendly web applications that provide exceptional user experiences."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        imageAlt="Frontend development"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Tools</h2>
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

      {/* Recent Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
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
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Development Process</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Planning & Analysis",
                  description: "Understanding requirements and creating project roadmap"
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description: "Creating wireframes and interactive prototypes"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Writing clean, maintainable code with best practices"
                },
                {
                  step: "04",
                  title: "Testing & Deployment",
                  description: "Thorough testing and smooth deployment process"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Frontend?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's create a modern, responsive, and high-performing web application
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

export default FrontendDevelopment;