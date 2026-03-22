import { motion } from 'motion/react';
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { Button } from '../Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
//import profileImg from 'figma:asset/6dde7b8d413cca3a4c6b92cd6b4aed14b08e9d83.png';
import profileImg from '../../../assets/myphoto.png';

interface AboutSectionProps {
  preview?: boolean;
}

export function AboutSection({ preview = false }: AboutSectionProps) {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className={`${preview ? 'py-20' : 'min-h-screen py-20 pt-24'} px-4 md:px-8 lg:px-16 ${
        preview ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
      }`}
    >
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"
              />
              <ImageWithFallback
                src={profileImg}
                alt="Tharuka Jayaweera"
                className="relative rounded-2xl w-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-gray-900 dark:text-white">
              Full Stack Developer & Content Creator
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Tharuka Jayaweera, a passionate Full Stack Software Engineer and Content Creator 
              dedicated to building digital experiences that make a difference[cite: 1, 6]. With expertise in 
              modern web technologies, I specialize in creating scalable, user-friendly applications[cite: 7].
            </p>
            {!preview && (
              <>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My technical stack includes Laravel, React, JavaScript, PHP, MySQL, and Android development[cite: 10, 11, 43]. 
                  I focus on writing clean, maintainable code and delivering solutions that exceed expectations. 
                  Whether it's building e-commerce platforms, management systems, or web applications, I bring 
                  creativity and technical expertise to every project[cite: 48, 50, 52, 53].
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Beyond coding, I'm passionate about sharing knowledge and helping others grow in their 
                  development journey. I continuously learn new technologies and best practices to stay 
                  at the forefront of web development[cite: 8].
                </p>
              </>
            )}
            <div className="flex gap-4 pt-4">
              {preview ? (
                <Button onClick={() => navigate('/about')}>View More</Button>
              ) : (
                <a href="/Tharuka_Jayaweera.pdf" download="Tharuka_Jayaweera.pdf">
                  <Button variant="primary">
                    <FaDownload className="inline mr-2" />
                    Download CV
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}