import React from 'react';
import { User, MapPin, GraduationCap, Coffee, Heart, Zap } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded animate-slideRight"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Quick Info */}
            <div className="space-y-8 animate-fadeInLeft">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <User className="w-32 h-32 text-blue-600 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 group-hover:from-blue-600/20 group-hover:to-teal-600/20 transition-all duration-500"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Rangunia, Chittagong, Bangladesh</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Master's in Progress | Economics Graduate</span>
                </div>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="space-y-6 animate-fadeInRight">
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">
                  A passionate and dedicated front-end developer with strong expertise in 
                  <span className="text-blue-600 font-semibold"> React.js</span>, 
                  <span className="text-blue-600 font-semibold"> Next.js</span>, 
                  and modern web technologies.
                </p>
                
                <p className="mb-6">
                  Also an experienced <span className="text-teal-600 font-semibold">Shopify developer</span>, 
                  specializing in Liquid customization and eCommerce functionality.
                </p>
                
                <p className="mb-6">
                  Currently pursuing Master's degree after completing Honours in Economics 
                  from <span className="font-semibold">Chittagong College</span>.
                </p>
                
                <p className="mb-8">
                  Known for excellent communication, polite behavior, and strong 
                  problem-solving abilities.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;