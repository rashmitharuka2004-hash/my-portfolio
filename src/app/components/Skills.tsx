import { useState } from 'react';
import { motion } from 'motion/react';
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaDatabase,
  FaAndroid,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiDocker,
} from 'react-icons/si';
import { SectionWrapper } from './SectionWrapper';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const skills: Skill[] = [
    { name: 'React', level: 95, icon: <FaReact />, category: 'frontend' },
    { name: 'JavaScript', level: 90, icon: <SiJavascript />, category: 'frontend' },
    { name: 'TypeScript', level: 85, icon: <SiTypescript />, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss />, category: 'frontend' },
    { name: 'Node.js', level: 85, icon: <FaNodeJs />, category: 'backend' },
    { name: 'Laravel', level: 88, icon: <FaLaravel />, category: 'backend' },
    { name: 'PHP', level: 87, icon: <FaPhp />, category: 'backend' },
    { name: 'MySQL', level: 85, icon: <SiMysql />, category: 'backend' },
    { name: 'MongoDB', level: 80, icon: <SiMongodb />, category: 'backend' },
    { name: 'Android', level: 82, icon: <FaAndroid />, category: 'mobile' },
    { name: 'Git', level: 90, icon: <FaGitAlt />, category: 'tools' },
    { name: 'Docker', level: 75, icon: <SiDocker />, category: 'tools' },
    { name: 'AWS', level: 78, icon: <FaAws />, category: 'tools' },
  ];

  const filters = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills =
    activeFilter === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-800">
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
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
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

              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </div>

              {/* Circular Progress (Alternative) */}
              {/* <div className="relative w-24 h-24 mx-auto">
                <svg className="transform -rotate-90 w-24 h-24">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    whileInView={{
                      strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100),
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-blue-600"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="text-xl font-bold">{skill.level}%</span>
                </div>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
