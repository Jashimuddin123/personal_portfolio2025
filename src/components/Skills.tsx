import React, { useState, useEffect } from 'react';
import { Code2, Database, Palette, PenTool as Tool, GitBranch, Figma } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
        { name: "JavaScript ES6+", level: 92 },
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 88 }
      ],
      color: "blue"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Styling & Frameworks",
      skills: [
        { name: "Tailwind CSS", level: 96 },
        { name: "Bootstrap 5", level: 90 },
        { name: "Responsive Design", level: 98 },
        { name: "CSS Grid & Flexbox", level: 90 }
      ],
      color: "teal"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 78 },
        { name: "REST APIs", level: 85 },
        { name: "Shopify Liquid", level: 95 },
        { name: "GitHub", level: 88 }
      ],
      color: "orange"
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Development Tools",
      skills: [
        { name: "VS Code", level: 98 },
        { name: "NPM", level: 88 },
        { name: "Git", level: 85 },
        { name: "Chrome DevTools", level: 90 }
      ],
      color: "purple"
    },
    {
      icon: <Figma className="w-6 h-6" />,
      title: "Design Collaboration",
      skills: [
        { name: "Figma", level: 88 },
        { name: "UI Implementation", level: 93 },
        { name: "Design Systems", level: 85 },
        { name: "Prototyping", level: 80 }
      ],
      color: "green"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded animate-slideRight"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Comprehensive expertise in modern web development technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-${category.color}-100 text-${category.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <motion.span 
                          className="text-xs font-bold text-blue-600"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          className={`h-2 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full transition-all duration-1000 ease-out`}
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Icons */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Shopify", icon: "🛍️" },
                { name: "eCommerce", icon: "💳" },
                { name: "Performance", icon: "⚡" },
                { name: "SEO", icon: "🔍" },
                { name: "Testing", icon: "🧪" },
                { name: "Deployment", icon: "🚀" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    hover: { duration: 0.3 }
                  }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;