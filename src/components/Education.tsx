import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, TrendingUp } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's Degree",
      field: "In Progress",
      year: "2025",
      status: "current",
      description: "Currently pursuing advanced studies to complement my technical expertise.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      degree: "Honours in Economics",
      field: "Economics",
      institution: "Chittagong College",
      year: "Completed",
      status: "completed",
      description: "Developed strong analytical and problem-solving skills that enhance my development approach.",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistent high performance in economics studies",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Analytical Thinking",
      description: "Strong foundation in logical reasoning and data analysis",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Research Skills",
      description: "Experience in academic research and critical thinking",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded animate-slideRight"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Academic foundation that strengthens my development skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    edu.status === 'current' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-teal-100 text-teal-600'
                  }`}>
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      {edu.status === 'current' && (
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                    
                    {edu.field && (
                      <p className="text-gray-600 mb-2">{edu.field}</p>
                    )}
                    
                    {edu.institution && (
                      <div className="flex items-center text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{edu.year}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-fadeInUp animation-delay-400">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Academic Strengths
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Impact */}
          <div className="mt-12 text-center animate-fadeInUp animation-delay-600">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How My Education Enhances My Development Work
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                My background in Economics has equipped me with strong analytical thinking, 
                problem-solving abilities, and a systematic approach to complex challenges. 
                These skills translate directly into writing cleaner code, understanding user needs, 
                and creating efficient solutions for web development projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;