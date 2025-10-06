import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const CounterAnimation: React.FC<CounterProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * end * Math.pow(10, decimals)) / Math.pow(10, decimals));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration, decimals]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="font-bold"
    >
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
};

export default CounterAnimation;
