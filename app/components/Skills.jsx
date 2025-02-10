import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const skillsData = [
  { icon: 'c-original', name: 'C', category: 'Languages', color: 'blue' },
  { icon: 'cplusplus-original', name: 'C++', category: 'Languages', color: 'indigo' },
  { icon: 'java-original', name: 'Java', category: 'Languages', color: 'red' },
  { icon: 'python-original', name: 'Python', category: 'Languages', color: 'green' },
  { icon: 'javascript-original', name: 'JavaScript', category: 'Web', color: 'yellow' },
  { icon: 'typescript-original', name: 'TypeScript', category: 'Web', color: 'blue' },
  { icon: 'react-original', name: 'React', category: 'Frontend', color: 'cyan' },
  { icon: 'nextjs-original', name: 'Next.js', category: 'Frontend', color: 'gray' },
  { icon: 'nodejs-original', name: 'Node.js', category: 'Backend', color: 'green' },
  { icon: 'express', name: 'Express', category: 'Backend', color: 'gray' },
  { icon: 'prisma', name: 'Prisma', category: 'Database', color: 'purple' },
  { icon: 'mongodb-original', name: 'MongoDB', category: 'Database', color: 'green' },
  { icon: 'postgresql-original', name: 'PostgreSQL', category: 'Database', color: 'blue' },
  { icon: 'tailwindcss-original', name: 'Tailwind', category: 'Styling', color: 'cyan' },
  { icon: 'docker-original', name: 'Docker', category: 'DevOps', color: 'blue' },
  { icon: 'git-original', name: 'Git', category: 'Version Control', color: 'orange' },
  { icon: 'github', name: 'GitHub', category: 'Version Control', color: 'gray' },
  { icon: 'html5-original', name: 'HTML', category: 'Web', color: 'orange' },
  { icon: 'css3-original', name: 'CSS', category: 'Web', color: 'blue' },
  { icon: 'vscode-original', name: 'VS Code', category: 'Tools', color: 'blue' },
  { icon: 'figma-original', name: 'Figma', category: 'Design', color: 'purple' }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 
    ...new Set(skillsData.map(skill => skill.category))
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section 
      id='skills'
      className='w-full px-[5%] md:px-[12%] py-20 scroll-mt-20 
      bg-gradient-to-br from-lightBg to-blue-50 
      dark:from-darkBg dark:to-gray-900
      overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-6xl w-full mx-auto'>
        {/* Section Header */}
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-200'>My Skills</h2>
        </motion.div>

        {/* Category Filters */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ 
                opacity: 0, 
                scale: 0.9 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { type: "spring", stiffness: 300 }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9,
                transition: { duration: 0.2 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${activeCategory === category 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover="hover"
                className='flex flex-col items-center justify-center 
                group relative p-2 bg-transparent
                rounded-lg border border-gray-200 dark:border-gray-700
                transition-all duration-300 
                hover:border-blue-200 dark:hover:border-blue-800'
              >
                {/* Skill Icon */}
                <div className='w-12 h-12 flex items-center justify-center 
                  rounded-lg
                  transition-all duration-300
                  hover:bg-blue-50/30 
                  dark:hover:bg-blue-900/10'>
                  <img 
                    src={`/skill_icons/${skill.icon}.svg`} 
                    alt={`${skill.name} icon`} 
                    className={`w-8 h-8 object-contain 
                    opacity-70 group-hover:opacity-100
                    group-hover:scale-110 
                    transition-all duration-300 
                    group-hover:rotate-6
                    ${['prisma', 'github', 'express'].includes(skill.icon) 
                      ? 'dark:invert dark:brightness-200 dark:contrast-200' 
                      : ''}`}
                  />
                </div>
                {/* Skill Name */}
                <p className='text-xs font-medium text-gray-600 dark:text-gray-300 
                  text-center group-hover:text-blue-600 
                  dark:group-hover:text-blue-400 
                  transition-colors duration-300 mt-1'>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills