import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '../Button';
import { Card } from '../Card';
import { ImageWithFallback } from '../figma/ImageWithFallback';


interface ProjectsSectionProps {
  preview?: boolean;
}

export function ProjectsSection({ preview = false }: ProjectsSectionProps) {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Travel Ra Taxi & Tours',
      description: 'Travel and transportation platform for exploring Sri Lanka with ease',
      image: 'https://images.unsplash.com/photo-1743007783898-38a8aa534815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0YXhpJTIwdG91cnMlMjBzcmklMjBsYW5rYXxlbnwxfHx8fDE3NzMxMjc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['Laravel', 'JavaScript', 'MySQL'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/travel-ra-page',
      liveUrl: 'https://travelratours.com/',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with real-time messaging capabilities',
      image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsLXRpbWUlMjBjaGF0JTIwbWVzc2FnaW5nJTIwYXBwfGVufDF8fHx8MTc3MzA2MzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['React', 'WebSocket', 'Node.js'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/react-realtime-chat-app',
    },
    {
      title: 'Alazea Garden E-Commerce',
      description: 'E-commerce platform for garden plants and accessories',
      image: 'https://images.unsplash.com/photo-1631942195955-e1639f95ba4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjBlY29tbWVyY2UlMjBzdG9yZXxlbnwxfHx8fDE3NzMxMjc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/alazea-garden-ecommerce',
    },
    {
      title: 'BakeSoft Bakery POS System',
      description: 'Point of Sale system for bakery management',
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwb3MlMjBzeXN0ZW0lMjBjYXNoaWVyfGVufDF8fHx8MTc3MzEyNzk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      techStack: ['Java', 'MySQL', 'JavaFX'],
      githubUrl: 'https://github.com/rashmitharuka2004-hash/BakeSoft-Bakery-POS-System',
    },
    {
  title: 'Travel Ra Full System',
  description: 'Android + Admin panel + Firebase backend',
  image: '/travelra.png', // your screenshot
  techStack: ['Android', 'React', 'Firebase'],
  githubUrl: 'https://github.com/rashmitharuka2004-hash/travel-ra-android-app',
  liveUrl: 'https://f0jr1mbayqtphb2i.public.blob.vercel-storage.com/WhatsApp%20Video%202026-04-06%20at%2018.35.45.mp4',
}
  ];

  const displayProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section
      id="projects"
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
          <h2 className="text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {preview
              ? 'Featured projects showcasing my development skills'
              : 'A showcase of my recent work and development projects'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProjects.map((project, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                >
                  <FaGithub /> Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {preview && (
          <div className="text-center">
            <Button onClick={() => navigate('/projects')}>View All Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
}
