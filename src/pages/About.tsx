import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { User, MapPin, GraduationCap, Coffee, Heart, Zap, Award, Code, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong analytical skills with creative solutions"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Team Player",
      description: "Excellent communication and collaboration"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Passionate",
      description: "Dedicated to continuous learning and growth"
    }
  ];

  const stats = [
    { number: "60+", label: "Projects Completed" },
    { number: "4+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="About Jashim Uddin"
        description="A passionate and dedicated front-end developer with strong expertise in React.js, Next.js, and modern web technologies. Also an experienced Shopify developer, specializing in Liquid customization and eCommerce functionality."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        imageAlt="Developer workspace"
      />

      {/* Main About Content */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image and Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="w-80 h-80 mx-auto relative overflow-hidden group shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl opacity-30"></div>
                    <img
                      src="/myProfile.jpg"
                      alt="Jashim Uddin"
                      className="w-full h-full object-cover rounded-2xl border-4 border-white group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <MapPin className="w-6 h-6 mr-4 text-red-600" />
                    <span className="font-medium">Rangunia, Chittagong, Bangladesh</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <GraduationCap className="w-6 h-6 mr-4 text-blue-600" />
                    <span className="font-medium">Master's in Progress | Economics Graduate</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Briefcase className="w-6 h-6 mr-4 text-red-600" />
                    <span className="font-medium">4+ Years Development Experience</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="text-2xl mr-4">📧</span>
                    <span className="font-medium">adnanmahmud3394@gmail.com</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - About Content */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6 text-lg"
                  >
                    A passionate and dedicated front-end developer with strong expertise in 
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded mx-1"
                    >
                      React.js
                    </motion.span>, 
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded mx-1"
                    >
                      Next.js
                    </motion.span>, 
                    and modern web technologies.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-6 text-lg"
                  >
                    Also an experienced 
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded mx-1"
                    >
                      Shopify developer
                    </motion.span>, 
                    specializing in Liquid customization and eCommerce functionality.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-6 text-lg"
                  >
                    Currently pursuing Master's degree after completing Honours in Economics 
                    from 
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded mx-1"
                    >
                      Chittagong College
                    </motion.span>.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-8 text-lg"
                  >
                    Known for excellent communication, polite behavior, and strong 
                    problem-solving abilities.
                  </motion.p>
                </div>

                {/* Highlights */}
                <div className="grid gap-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-gradient-to-r from-blue-100 to-red-100 text-blue-600 rounded-xl shadow-md"
                      >
                        {highlight.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">{highlight.title}</h4>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">My Journey in Numbers</h2>
              <p className="text-blue-100">Achievements that speak for themselves</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Frontend Development",
                  skills: ["React.js", "Next.js", "JavaScript ES6+", "HTML5 & CSS3"]
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Shopify Development",
                  skills: ["Liquid Templates", "Theme Customization", "Store Setup", "Performance Optimization"]
                },
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: "Tools & Technologies",
                  skills: ["Tailwind CSS", "Bootstrap", "Git & GitHub", "VS Code"]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;