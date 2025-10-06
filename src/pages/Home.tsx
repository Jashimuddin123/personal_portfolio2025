import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Download, ArrowRight, Code, Sparkles, Star, ExternalLink, Eye } from 'lucide-react';
import TestimonialSliderEnhanced from '../components/TestimonialSliderEnhanced';
import SkillProgressBar from '../components/SkillProgressBar';

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
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-primary-100/80 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-72 h-72 bg-red-200 dark:bg-red-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-2xl text-primary dark:text-primary-400 font-semibold mb-4"
                  >
                    Welcome to World of{' '}
                    <span className="font-bold text-primary-600 dark:text-primary-300">
                      Jashim Uddin
                    </span>
                  </motion.h2>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                  >
                    I'm{' '}
                    <span className="text-primary dark:text-primary-400">
                      Jashim Uddin
                    </span>
                    {' '}a{' '}
                    <motion.span
                      animate={{
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block text-red-600 dark:text-red-400"
                    >
                      {displayText}
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                  </motion.h1>
                  
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              What My Clients Say
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-600 mt-4"
            >
              Real feedback from satisfied clients
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <TestimonialSliderEnhanced />
          </div>
        </div>
      </section>

      {/* Skills Progress Bar Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              >
                My <span className="text-primary">Expertise</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                Specialized skills in Shopify development and modern web technologies
              </motion.p>
            </motion.div>

            {/* Skills Progress Bars */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
              <SkillProgressBar
                skills={[
                  {
                    name: 'Shopify Customizations',
                    percentage: 96,
                    icon: 'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg',
                    color: 'bg-gradient-to-r from-green-500 to-green-600',
                  },
                  {
                    name: 'Shopify Liquid Development',
                    percentage: 90,
                    icon: 'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg',
                    color: 'bg-gradient-to-r from-primary to-primary-700',
                  },
                  {
                    name: 'Shopify Landing Page (Pagefly)',
                    percentage: 95,
                    icon: 'https://d3t84cny91r9gt.cloudfront.net/assets/home/favicon-c0b7e19fff8a2bb5faeac9dae59bc266f3c04dcfa29d05e6f0e3a07d1bb02c0e.png',
                    color: 'bg-gradient-to-r from-purple-500 to-purple-600',
                  },
                  {
                    name: 'Gempages',
                    percentage: 95,
                    icon: 'https://gempages.net/wp-content/uploads/2023/08/cropped-gem-fav-icon-32x32.png',
                    color: 'bg-gradient-to-r from-pink-500 to-red-500',
                  },
                  {
                    name: 'Replo',
                    percentage: 94,
                    icon: 'https://cdn.prod.website-files.com/5ff5db9c9b1e7bc42797c05b/62d6e6a5f6b2c50e8b84256f_Replo%20Icon.png',
                    color: 'bg-gradient-to-r from-orange-500 to-red-600',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-800 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-4"
            >
              My Services
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-red-400 mx-auto rounded"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
            >
              Professional web development services tailored to your business needs
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Frontend Development",
                description: "Modern React.js applications with beautiful UI",
                icon: "💻",
                link: "/services/frontend-development",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Shopify Development",
                description: "Custom Shopify stores and theme customization",
                icon: "🛍️",
                link: "/services/shopify-theme-customize",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "E-commerce Solutions",
                description: "Complete online store development and optimization",
                icon: "🚀",
                link: "/services/ecommerce-services",
                color: "from-red-500 to-orange-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose Me?
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed"
            >
              Dedicated to excellence with proven expertise and commitment to your success
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "4+ Years Experience",
                description: "Proven track record in web development with diverse projects",
                icon: "🏆",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "100% Client Satisfaction",
                description: "Dedicated to delivering quality results that exceed expectations",
                icon: "⭐",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Modern Technologies",
                description: "Using latest tools and frameworks for optimal performance",
                icon: "🚀",
                gradient: "from-red-500 to-pink-500"
              },
              {
                title: "24/7 Support",
                description: "Always available for your projects and quick to respond",
                icon: "💬",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-transparent relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-6 relative z-10"
                >
                  {benefit.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  {benefit.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;