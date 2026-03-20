import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
