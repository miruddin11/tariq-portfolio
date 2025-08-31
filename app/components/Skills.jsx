import React, { useState, useEffect } from 'react'
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
  const [isHovered, setIsHovered] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.03
      }
    })
  };

  const LoadingSkeleton = () => (
    <motion.div 
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl"
        />
      ))}
    </motion.div>
  );

  const categories = [
    'All', 
    ...new Set(skillsData.map(skill => skill.category))
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const categoryColors = {
    'All': 'from-blue-500 to-indigo-600',
    'Languages': 'from-red-500 to-pink-600',
    'Web': 'from-amber-500 to-orange-600',
    'Frontend': 'from-emerald-500 to-teal-600',
    'Backend': 'from-violet-500 to-purple-600',
    'Database': 'from-rose-500 to-pink-600',
    'Styling': 'from-cyan-500 to-blue-600',
    'DevOps': 'from-blue-500 to-indigo-600',
    'Version Control': 'from-gray-500 to-gray-700',
    'Tools': 'from-amber-400 to-orange-500',
    'Design': 'from-fuchsia-500 to-purple-600'
  };

  const activeGradient = categoryColors[activeCategory] || 'from-blue-500 to-indigo-600';

  return (
    <motion.section 
      id='skills'
      className='w-full px-[5%] md:px-[12%] py-20 scroll-mt-20 
      bg-lightBg dark:bg-darkBg
      relative overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-6xl w-full mx-auto'>
        {/* Section Header */}
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2 
            className='text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My Skills
          </motion.h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className='flex flex-wrap justify-center gap-3 mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.4 + (index * 0.05),
                  type: "spring", 
                  stiffness: 300 
                }
              }}
              whileHover={{ 
                y: -2,
                scale: 1.05,
                boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.08)"
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <motion.div 
            className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={activeCategory}
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index % 10}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setIsHovered(skill.name)}
                  onHoverEnd={() => setIsHovered(null)}
                  className='flex flex-col items-center justify-center 
                    group relative p-3 bg-white dark:bg-gray-800/80 backdrop-blur-sm
                    rounded-xl border border-gray-100 dark:border-gray-700/80
                    transition-all duration-300 
                    hover:shadow-lg hover:border-transparent
                    hover:bg-gradient-to-br hover:from-white/90 hover:to-gray-50
                    dark:hover:from-gray-800/90 dark:hover:to-gray-900/80
                    cursor-pointer'
                >
                  {/* Glow effect on hover */}
                  {isHovered === skill.name && (
                    <motion.div 
                      className="absolute inset-0 rounded-xl bg-blue-500/10 dark:bg-blue-400/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Skill Icon */}
                  <div className='w-14 h-14 flex items-center justify-center 
                    rounded-xl mb-2 relative z-10
                    transition-all duration-300
                    group-hover:scale-110'>
                    <img 
                      src={`/skill_icons/${skill.icon}.svg`} 
                      alt={`${skill.name} icon`} 
                      className={`w-9 h-9 object-contain 
                      transition-all duration-300 
                      ${['prisma', 'github', 'express'].includes(skill.icon) 
                        ? 'dark:invert dark:brightness-200 dark:contrast-200' 
                        : ''}
                      ${isHovered === skill.name ? 'drop-shadow-lg' : 'opacity-80'}`}
                    />
                  </div>
                  
                  {/* Skill Name */}
                  <p className='text-xs font-medium text-gray-700 dark:text-gray-200 
                    text-center transition-colors duration-300 
                    group-hover:text-blue-600 dark:group-hover:text-blue-400
                    relative z-10'>
                    {skill.name}
                  </p>
                  
                  {/* Category indicator */}
                  <span className={`absolute -bottom-2 text-[10px] px-2 py-0.5 rounded-full 
                    bg-gradient-to-r ${categoryColors[skill.category] || 'from-blue-500 to-indigo-600'}
                    text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    shadow-md`}>
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default Skills;