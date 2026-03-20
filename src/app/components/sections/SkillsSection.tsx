import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaAndroid,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
} from 'react-icons/si';
import { Button } from '../Button';

interface SkillsSectionProps {
  preview?: boolean;
}

export function SkillsSection({ preview = false }: SkillsSectionProps) {
  const navigate = useNavigate();

  const featuredSkills = [
    { name: 'React', level: 90, icon: <FaReact /> },
    { name: 'Laravel', level: 93, icon: <FaLaravel /> },
    { name: 'JavaScript', level: 92, icon: <SiJavascript /> },
    { name: 'TypeScript', level: 85, icon: <SiTypescript /> },
    { name: 'PHP', level: 92, icon: <FaPhp /> },
    { name: 'Node.js', level: 85, icon: <FaNodeJs /> },
    { name: 'MySQL', level: 90, icon: <SiMysql /> },
    { name: 'Tailwind CSS', level: 88, icon: <SiTailwindcss /> },
  ];

  const displaySkills = preview ? featuredSkills.slice(0, 6) : featuredSkills;

  return (
    <section
      id="skills"
      className={`${preview ? 'py-20' : 'min-h-screen py-20 pt-24'} px-4 md:px-8 lg:px-16 ${
        preview ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {preview
              ? 'A selection of my core technical competencies'
              : 'A comprehensive overview of my technical expertise and proficiency levels'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displaySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-blue-600 dark:text-blue-400 text-3xl">
                    {skill.icon}
                  </div>
                  <h4 className="text-gray-900 dark:text-white">{skill.name}</h4>
                </div>
                <span className="text-blue-600 dark:text-blue-400">
                  {skill.level}%
                </span>
              </div>

              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="text-center">
            <Button onClick={() => navigate('/skills')}>View All Skills</Button>
          </div>
        )}
      </div>
    </section>
  );
}
