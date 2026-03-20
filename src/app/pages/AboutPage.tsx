import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FaAward, FaCode, FaUsers } from 'react-icons/fa';
import { AboutSection } from '../components/sections/AboutSection';

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

function AnimatedCounter({ end, label, icon, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
    >
      <div className="text-blue-600 dark:text-blue-400 text-4xl mb-3 flex justify-center">
        {icon}
      </div>
      <div className="text-gray-900 dark:text-white mb-2">
        {count}
        {suffix}+
      </div>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
}

export function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <AboutSection preview={false} />

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <AnimatedCounter end={3} label="Years Experience" icon={<FaCode />} />
            <AnimatedCounter end={5} label="Projects Completed" icon={<FaAward />} />
            <AnimatedCounter end={5} label="Happy Clients" icon={<FaUsers />} />
            <AnimatedCounter end={95} label="Success Rate" icon={<FaAward />} suffix="%" />
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Education',
                content: 'Bachelor of Science with Honours Software Engineering',
                detail: 'Birmingham City University (2022-2026)',
              },
              {
                title: 'Location',
                content: 'Sri Lanka',
                detail: 'Available for Remote Work',
              },
              {
                title: 'Focus Areas',
                content: 'Web & Mobile Development',
                detail: 'Full Stack Solutions',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl text-center"
              >
                <p className="text-blue-600 dark:text-blue-400 mb-2">{item.title}</p>
                <p className="text-gray-900 dark:text-white mb-1">{item.content}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
