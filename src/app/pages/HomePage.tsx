import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '../components/Button';
import { SocialIcons } from '../components/SocialIcons';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { scrollToSection } from '../utils/scrollToSection';
import profileImg from "../../assets/myphoto.png";

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                Hi, I'm
              </p>
              <h1 className="text-gray-900 dark:text-white mb-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tharuka Jayaweera
                </span>
              </h1>
            </motion.div>

            <div className="text-gray-700 dark:text-gray-300 min-h-[60px]">
              <TypeAnimation
                sequence={[
                  'Full Stack Software Engineer',
                  2000,
                  'Laravel Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'Content Creator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Full Stack Software Engineer and Content Creator passionate about
              building digital experiences. Specializing in Laravel, React, and
              modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <Button onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('#', '_blank')}
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <SocialIcons />
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30"
              />
              <ImageWithFallback
                src={profileImg}
                alt="Tharuka Jayaweera"
                className="relative rounded-full w-full aspect-square object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <FaChevronDown size={32} />
        </motion.div>
      </section>

      {/* Preview Sections */}
      <AboutSection preview />
      <SkillsSection preview />
      <ProjectsSection preview />
      <ContactSection preview />
    </>
  );
}