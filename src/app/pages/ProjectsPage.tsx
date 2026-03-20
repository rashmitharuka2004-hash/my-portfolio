import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { Card } from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Travel Ra Taxi & Tours',
      description: 'Travel and transportation platform for exploring Sri Lanka with ease',
      longDescription:
        'Travel Ra Taxi & Tours is a comprehensive travel platform designed to help tourists explore Sri Lanka. Built using Laravel and modern web technologies, the website provides services including airport transfers, custom tours, guided excursions, and travel packages. Features include booking logic, user requests, itinerary management, dynamic service pages, tour listings, and mobile-responsive design. The platform enables customers to customize travel itineraries, browse destinations, and access travel stories and tips.',
      image: 'https://images.unsplash.com/photo-1743007783898-38a8aa534815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0YXhpJTIwdG91cnMlMjBzcmklMjBsYW5rYXxlbnwxfHx8fDE3NzMxMjc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['Laravel', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Blade Templates'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/travel-ra-page',
      liveUrl: 'https://travelratours.com/',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with real-time messaging capabilities',
      longDescription:
        'A feature-rich real-time chat application built with React. Includes instant messaging, user authentication, online status indicators, message notifications, and a clean, intuitive interface. Demonstrates proficiency in React hooks, state management, and real-time communication technologies.',
      image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsLXRpbWUlMjBjaGF0JTIwbWVzc2FnaW5nJTIwYXBwfGVufDF8fHx8MTc3MzA2MzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['React', 'JavaScript', 'WebSocket', 'Node.js', 'CSS'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/react-realtime-chat-app',
    },
    {
      title: 'Alazea Garden E-Commerce',
      description: 'E-commerce platform for garden plants and accessories',
      longDescription:
        'Alazea is a beautiful e-commerce platform dedicated to garden enthusiasts. Features include product catalog, shopping cart, user authentication, order management, and secure checkout. Built with attention to detail and user experience, offering a seamless shopping experience for plant lovers.',
      image: 'https://images.unsplash.com/photo-1631942195955-e1639f95ba4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjBlY29tbWVyY2UlMjBzdG9yZXxlbnwxfHx8fDE3NzMxMjc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/alazea-garden-ecommerce',
    },
    {
      title: 'BakeSoft Bakery POS System',
      description: 'Point of Sale system for bakery management',
      longDescription:
        'BakeSoft is a comprehensive POS system designed specifically for bakeries. Features include inventory management, sales tracking, customer management, receipt generation, and detailed reporting. Built to streamline bakery operations and improve efficiency with an intuitive interface.',
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwb3MlMjBzeXN0ZW0lMjBjYXNoaWVyfGVufDF8fHx8MTc3MzEyNzk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['Java', 'MySQL', 'JavaFX', 'JDBC'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/BakeSoft-Bakery-POS-System',
    },
    {
      title: 'AdyapanaSoft Student Management',
      description: 'Comprehensive student management system for educational institutions',
      longDescription:
        'AdyapanaSoft is a complete student management system designed for schools and educational institutions. Includes student registration, attendance tracking, grade management, course scheduling, parent communication, and administrative tools. Streamlines educational administration with powerful features.',
      image: 'https://images.unsplash.com/photo-1762329388386-22bf162a9368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWFuYWdlbWVudCUyMGVkdWNhdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NzMxMjc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['Java', 'MySQL', 'JavaFX', 'JDBC'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/AdyapanaSoft-Student-Management-System',
    },
    {
      title: 'Advanced Calculator',
      description: 'Feature-rich calculator application built with Java',
      longDescription:
        'An advanced calculator application with standard arithmetic operations, scientific functions, memory functions, and a user-friendly interface. Built with Java to demonstrate object-oriented programming principles and GUI development skills.',
      image: 'https://images.unsplash.com/photo-1766991517518-918acb35e8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzA3MjM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['Java', 'Swing', 'AWT'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/advanced-calculator-java',
    },
    {
      title: 'Bloom Fashion E-Commerce',
      description: 'Modern e-commerce platform for fashion clothing store',
      longDescription:
        'Bloom is a stylish e-commerce platform for fashion retail. Features include product browsing, advanced filtering, shopping cart, wishlist, user accounts, order tracking, and secure payments. Designed with a focus on user experience and modern web design principles.',
      image: 'https://images.unsplash.com/photo-1599408444232-8947844d94e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBlY29tbWVyY2UlMjBzdG9yZXxlbnwxfHx8fDE3NzMxMjc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/Bloom-E-commerce-Fashion-Store',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-white text-sm px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <h3 className="text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-gray-900 dark:text-white mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub /> View Code
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
