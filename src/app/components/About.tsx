import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FaDownload, FaAward, FaCode, FaUsers } from 'react-icons/fa';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';

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
        {count}{suffix}+
      </div>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-gray-900 dark:text-white">
              Full Stack Developer & Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building
              scalable web applications and mobile solutions. My expertise spans across modern
              JavaScript frameworks, backend technologies, and cloud platforms.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in React, Laravel, PHP, and MySQL, with a strong focus on creating
              intuitive user experiences and writing clean, maintainable code. I'm constantly
              learning new technologies and best practices to stay at the forefront of web development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical articles, or exploring new frameworks and tools.
            </p>
            <Button variant="primary" onClick={() => window.open('#', '_blank')}>
              <FaDownload className="inline mr-2" />
              Download CV
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <AnimatedCounter end={5} label="Years Experience" icon={<FaCode />} />
            <AnimatedCounter end={50} label="Projects Completed" icon={<FaAward />} />
            <AnimatedCounter end={30} label="Happy Clients" icon={<FaUsers />} />
            <AnimatedCounter end={98} label="Success Rate" icon={<FaAward />} suffix="%" />
          </div>
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
              content: 'B.Sc. in Computer Science',
              detail: 'University Name, 2018',
            },
            {
              title: 'Location',
              content: 'San Francisco, CA',
              detail: 'Available for Remote Work',
            },
            {
              title: 'Languages',
              content: 'English, Spanish',
              detail: 'Fluent in Both',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center"
            >
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                {item.title}
              </p>
              <p className="text-gray-900 dark:text-white mb-1">
                {item.content}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
