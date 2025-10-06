import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
  icon?: string;
  color?: string;
}

interface SkillProgressBarProps {
  skills: Skill[];
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(
    skills.map(() => 0)
  );

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill, index) => {
        let current = 0;
        const increment = skill.percentage / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= skill.percentage) {
            current = skill.percentage;
            clearInterval(timer);
          }
          setAnimatedPercentages((prev) => {
            const newPercentages = [...prev];
            newPercentages[index] = Math.round(current);
            return newPercentages;
          });
        }, 15);
      });
    }
  }, [isInView, skills]);

  return (
    <div ref={ref} className="space-y-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative"
        >
          {/* Skill Name and Percentage */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-3">
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
              )}
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </span>
            </div>
            <motion.span
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="text-lg font-bold text-primary dark:text-primary-400"
            >
              {animatedPercentages[index]}%
            </motion.span>
          </div>

          {/* Progress Bar Background */}
          <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            {/* Animated Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.percentage}%` } : {}}
              transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
              className={`h-full rounded-full relative ${
                skill.color || 'bg-gradient-to-r from-primary to-primary-600'
              }`}
              style={{
                boxShadow: '0 2px 10px rgba(37, 99, 235, 0.5)',
              }}
            >
              {/* Shine Effect */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillProgressBar;
