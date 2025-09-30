import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { ExternalLink, Star, Award, Briefcase, User } from 'lucide-react';

const RequestQuote = () => {
  const profiles = [
    {
      platform: "Fiverr",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      rating: "5.0",
      reviews: "150+",
      orders: "200+",
      description: "Top-rated seller specializing in React.js and Shopify development",
      link: "#",
      color: "green"
    },
    {
      platform: "Upwork",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      rating: "5.0",
      reviews: "85+",
      earnings: "$50K+",
      description: "Expert frontend developer with 100% job success score",
      link: "#",
      color: "blue"
    }
  ];

  const workGallery = [
    {
      title: "E-commerce Dashboard",
      image: "/Untitled design (1).png",
      category: "React.js"
    },
    {
      title: "Shopify Store",
      image: "/Untitled design (4).png",
      category: "Shopify"
    },
    {
      title: "Landing Page",
      image: "/Untitled design (5).png",
      category: "Frontend"
    },
    {
      title: "Mobile App UI",
      image: "/Untitled design (7).png",
      category: "UI/UX"
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Request a Quote"
        description="Ready to start your project? Connect with me on professional platforms or browse my work gallery to see what I can create for you. Let's discuss your requirements and bring your vision to life."
        image="/myProfile.jpg"
        imageAlt="Request quote and hire"
      />

      {/* Professional Profiles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hire Me On</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
              <p className="text-xl text-gray-600 mt-6">
                Connect with me on professional freelancing platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-600"
                >
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <img
                        src={profile.image}
                        alt={`${profile.platform} profile`}
                        className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-${profile.color}-500 rounded-full flex items-center justify-center`}>
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{profile.platform}</h3>
                    <p className="text-gray-600 mb-4">{profile.description}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                        <span className="font-semibold">Rating</span>
                      </div>
                      <span className="text-blue-600 font-bold">{profile.rating}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold">Reviews</span>
                      </div>
                      <span className="text-blue-600 font-bold">{profile.reviews}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Briefcase className="w-5 h-5 text-red-600 mr-2" />
                        <span className="font-semibold">
                          {profile.orders ? 'Orders' : 'Earnings'}
                        </span>
                      </div>
                      <span className="text-red-600 font-bold">
                        {profile.orders || profile.earnings}
                      </span>
                    </div>
                  </div>

                  <a
                    href={profile.link}
                    className={`w-full bg-${profile.color}-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-${profile.color}-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Hire on {profile.platform}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect on LinkedIn</h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's connect professionally and discuss your project requirements
              </p>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
                <div className="mb-6">
                  <img
                    src="/myProfile.jpg"
                    alt="LinkedIn Profile"
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-600 shadow-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jashim Uddin</h3>
                <p className="text-gray-600 mb-6">Front-End Developer & Shopify Expert</p>
                
                <a
                  href="#"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Gallery</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
              <p className="text-xl text-gray-600 mt-6">
                Browse through my recent projects and see the quality of work I deliver
              </p>
            </motion.div>

            {/* Request a Question Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Request a Question</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {[1, 2, 3, 4, 5].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={`/Untitled design (${index === 5 ? 7 : index === 4 ? 5 : index === 3 ? 4 : index === 2 ? 1 : 7}).png`}
                      alt={`Question ${index}`}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">Question {index}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workGallery.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {work.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{work.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Choose your preferred platform to discuss your project and get a custom quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Hire on Fiverr
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Hire on Upwork
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;