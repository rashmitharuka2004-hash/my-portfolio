import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './Card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration',
      longDescription:
        'A comprehensive e-commerce solution built with React and Laravel. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. Implemented responsive design and optimized for performance.',
      image:
        'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjcyMjcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['React', 'Laravel', 'MySQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://example.com',
      category: 'web',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription:
        'A real-time task management application inspired by Trello. Features drag-and-drop functionality, real-time collaboration, team management, file attachments, and notifications. Built with modern web technologies for seamless user experience.',
      image:
        'https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzcyNzEwODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://example.com',
      category: 'web',
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Android app for tracking workouts and nutrition',
      longDescription:
        'A comprehensive fitness tracking application for Android. Track workouts, set goals, monitor nutrition, and view detailed analytics. Features include exercise library, custom workout plans, progress photos, and integration with wearable devices.',
      image:
        'https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzY3JlZW58ZW58MXx8fHwxNzcyNzI4MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['Android', 'Kotlin', 'Firebase', 'Room Database'],
      githubUrl: 'https://github.com/yourusername/project3',
      liveUrl: 'https://play.google.com',
      category: 'mobile',
    },
  ];

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
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
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
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
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt /> Demo
                </a>
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
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
