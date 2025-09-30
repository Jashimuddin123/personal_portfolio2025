import React from 'react';
import { Code, ShoppingCart, Palette, Zap, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Front-End Web Development",
      description: "Creating responsive and interactive web applications using modern technologies.",
      skills: ["HTML, CSS, JavaScript", "React.js, Next.js", "Tailwind CSS, Bootstrap", "Responsive Web Design"],
      color: "blue",
      delay: "0"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Shopify Development",
      description: "Expert Shopify solutions for your eCommerce business needs.",
      skills: ["Custom Shopify Store Setup", "Shopify Liquid Code Expert", "Shopify Theme Customization", "Shopify Speed Optimization"],
      color: "teal",
      delay: "200"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI Design Collaboration",
      description: "Bringing your designs to life with pixel-perfect implementation.",
      skills: ["Figma to Code Conversion", "Pixel-perfect Design Implementation", "Design Review & Suggestions", "Cross-browser Compatibility"],
      color: "orange",
      delay: "400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              My Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded animate-slideRight"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp border-t-4 border-${service.color}-600`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className={`w-16 h-16 bg-${service.color}-100 text-${service.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className={`w-2 h-2 bg-${service.color}-600 rounded-full`}></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className={`text-${service.color}-600 font-semibold hover:text-${service.color}-700 transition-colors duration-300 flex items-center group-hover:translate-x-1`}>
                    Learn More
                    <Zap className="w-4 h-4 ml-2 group-hover:animate-bounce" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Icons */}
          <div className="mt-16 flex justify-center space-x-8 animate-fadeInUp animation-delay-600">
            <div className="group flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-sm text-gray-600">Web Apps</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-sm text-gray-600">Mobile First</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-sm text-gray-600">Fast Loading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;