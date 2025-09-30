import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Download, ArrowRight, Code, Sparkles, Star, ExternalLink, Eye } from 'lucide-react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  const texts = [
    'Professional Web Designer',
    'Shopify Expert',
    'Frontend Developer',
    'E-commerce Specialist'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-jashim-uddin.pdf';
    link.download = 'Jashim-Uddin-CV.pdf';
    link.click();
  };

  const projects = [
    {
      id: 1,
      title: "Jewelry E-commerce Store",
      category: "shopify",
      image: "/Untitled design (1).png",
      liveUrl: "https://jewelryfassion.com",
      description: "Elegant jewelry store with custom product displays",
      technologies: ["Shopify", "Liquid", "CSS3", "JavaScript"]
    },
    {
      id: 2,
      title: "Fashion E-commerce Platform",
      category: "ecommerce",
      image: "/Untitled design (4).png",
      liveUrl: "https://fashionstore.com",
      description: "Modern fashion store with advanced filtering",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 3,
      title: "Electronics Store",
      category: "shopify",
      image: "/Untitled design (5).png",
      liveUrl: "https://electrostore.com",
      description: "Tech store with product comparison features",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"]
    },
    {
      id: 4,
      title: "Multi-Device Responsive Site",
      category: "frontend",
      image: "/Untitled design (7).png",
      liveUrl: "https://responsive-site.com",
      description: "Fully responsive website across all devices",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'shopify', label: 'Shopify Stores' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'custom', label: 'Custom Development' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const testimonials = [
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Animations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          ></motion.div>
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute top-20 right-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
                    Welcome to World of{' '}
                    <motion.span
                      animate={{ 
                        color: ['#2563eb', '#dc2626', '#2563eb'],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="font-bold"
                    >
                      Jashim Uddin
                    </motion.span>
                  </h2>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    I'm{' '}
                    <motion.span
                      animate={{ 
                        color: ['#2563eb', '#dc2626', '#2563eb'],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block"
                    >
                      Jashim Uddin
                    </motion.span>
                    {' '}a{' '}
                    <motion.span
                      animate={{ 
                        y: [0, -10, 0],
                        color: ['#dc2626', '#2563eb', '#dc2626']
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="inline-block"
                    >
                      {displayText}
                    </motion.span>
                    <span className="animate-pulse text-red-600">|</span>
                  </h1>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-xl text-gray-600 mb-8 leading-relaxed"
                  >
                    Hello! I'm Jashim Uddin, a Professional website designer and Shopify developer expert in customization and Liquid. With 4+ years of experience, I am a dedicated and experienced web developer passionate about crafting high-quality, functional, visually appealing, and user-friendly websites.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex items-center text-gray-500 mb-8"
                  >
                    <MapPin className="w-5 h-5 mr-2 text-red-600" />
                    <span>Rangunia, Chittagong, Bangladesh</span>
                  </motion.div>
                </motion.div>

                {/* Call to Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <Link
                    to="/contact"
                    className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    Let's Work Together
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <button 
                    onClick={downloadCV}
                    className="group bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Side - Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <div className="w-96 h-96 mx-auto relative">
                    <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                    <img
                      src="/myProfile.jpg"
                      alt="Jashim Uddin"
                      className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
                    />
                  </div>
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-30"
                ></motion.div>
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-200 rounded-full opacity-30"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Core Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Frontend Development</h3>
              </div>

              <div className="space-y-6">
                {[
                  { name: "HTML5", level: 95 },
                  { name: "CSS3", level: 92 },
                  { name: "JavaScript ES6+", level: 88 },
                  { name: "React.js", level: 90 },
                  { name: "Next.js", level: 85 },
                  { name: "Tailwind CSS", level: 93 }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-3 bg-green-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Shopify Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Shopify Development</h3>
              </div>

              <div className="space-y-6">
                {[
                  { name: "Shopify Liquid", level: 95 },
                  { name: "Theme Customization", level: 93 },
                  { name: "Store Setup", level: 90 },
                  { name: "App Integration", level: 87 },
                  { name: "Performance Optimization", level: 89 },
                  { name: "E-commerce Strategy", level: 85 }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-red-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-3 bg-green-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Awesome Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Awesome Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </motion.div>

          {/* Project Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Project Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
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

          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              See More Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What My Clients Say Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What My Clients Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
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
          </div>
        </div>
      </section>

      {/* My Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Modern React.js applications with beautiful UI",
                icon: "💻",
                link: "/services/frontend-development"
              },
              {
                title: "Shopify Development",
                description: "Custom Shopify stores and theme customization",
                icon: "🛍️",
                link: "/services/shopify-theme-customize"
              },
              {
                title: "E-commerce Solutions",
                description: "Complete online store development and optimization",
                icon: "🚀",
                link: "/services/ecommerce-services"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-6"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-red-600 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Me?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "4+ Years Experience",
                description: "Proven track record in web development",
                icon: "🏆"
              },
              {
                title: "100% Client Satisfaction",
                description: "Dedicated to delivering quality results",
                icon: "⭐"
              },
              {
                title: "Modern Technologies",
                description: "Using latest tools and frameworks",
                icon: "🚀"
              },
              {
                title: "24/7 Support",
                description: "Always available for your projects",
                icon: "💬"
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
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl mb-4"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;