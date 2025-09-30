import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../components/Banner';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce React App",
      category: "frontend",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      description: "Modern e-commerce application built with React.js and Tailwind CSS",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "API Integration"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Shopify Custom Theme",
      category: "shopify",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      description: "Custom Shopify theme with advanced functionality and mobile optimization",
      technologies: ["Shopify Liquid", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Business Landing Page",
      category: "landing",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      description: "High-converting landing page with modern design and animations",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "frontend",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      description: "Full-featured restaurant website with online ordering system",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Fashion Store Shopify",
      category: "shopify",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      description: "Complete fashion e-commerce store with custom features",
      technologies: ["Shopify", "Liquid", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "SaaS Landing Page",
      category: "landing",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      description: "Modern SaaS landing page with pricing tables and testimonials",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'shopify', label: 'Shopify' },
    { id: 'landing', label: 'Landing Pages' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Banner
        title="My Portfolio"
        description="Explore my latest projects showcasing expertise in frontend development, Shopify customization, and modern web technologies. Each project represents a unique solution crafted with attention to detail."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        imageAlt="Portfolio showcase"
      />

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded"></div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                          <a
                            href={project.liveUrl}
                            className="flex items-center px-3 py-2 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live
                          </a>
                          <a
                            href={project.githubUrl}
                            className="flex items-center px-3 py-2 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

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

                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Live
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center text-gray-600 font-medium hover:text-gray-700 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Skills Used */}
      <section className="py-20 bg-white">
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
                { name: "React.js", icon: "⚛️" },
                { name: "Next.js", icon: "🔺" },
                { name: "Shopify", icon: "🛍️" },
                { name: "JavaScript", icon: "🟨" },
                { name: "Tailwind CSS", icon: "🎨" },
                { name: "Node.js", icon: "🟢" },
                { name: "HTML5", icon: "🔶" },
                { name: "CSS3", icon: "🔷" },
                { name: "Git", icon: "📝" },
                { name: "MongoDB", icon: "🍃" },
                { name: "API", icon: "🔗" },
                { name: "Responsive", icon: "📱" }
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
    </div>
  );
};

export default Portfolio;