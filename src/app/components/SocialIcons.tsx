import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

interface SocialIconsProps {
  className?: string;
}

export function SocialIcons({ className = '' }: SocialIconsProps) {
  const socials = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/rashmitharuka2004-hash', 
      label: 'GitHub' 
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/tharuka-jayaweera-82b057288', 
      label: 'LinkedIn' 
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/_tharukaa_?igsh=MWNpN3Bqa2Q4aTFrcA%3D%3D&utm_source=qr', 
      label: 'Instagram' 
    },
    { 
      icon: FaEnvelope, 
      href: 'mailto:rashmitharuka2004@gmail.com', 
      label: 'Email' 
    },
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ scale: 1.2, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
}
