import PropTypes from 'prop-types';
import { assets, workData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? workData : workData.slice(0, 6);

  const toggleProjects = () => {
    setShowAll(!showAll);
  };

  const colorVariants = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  }

  return (
    <motion.section
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6}}
      id='projects' 
      className='w-full px-4 sm:px-8 md:px-[12%] py-12 sm:py-16 md:py-20 scroll-mt-20 bg-lightBg dark:bg-darkBg'
      aria-label="Projects section"
    >
      <div className='max-w-6xl w-full mx-auto'>
        <motion.header 
          initial={{y:20, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.6}}
          className='text-center mb-8 sm:mb-12'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white'>
            My Projects
          </h2>
        </motion.header>

        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{ once: true }}
          role="list"
          aria-label="List of projects"
        >
          {displayedProjects.map((project, index) => {
            const colors = ['indigo', 'blue', 'cyan', 'green'];
            const color = colors[index % colors.length];
            
            return (
              <motion.article
                key={project.id || index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: index * 0.08}}
                whileHover={{ y: -8, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className='group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700'
                role="listitem"
              >
                {/* Project Image */}
                <div className='relative h-48 w-full overflow-hidden'>
                  <Image
                    src={project.bgImage}
                    alt={`Screenshot of ${project.title}`}
                    width={400}
                    height={300}
                    className='transition-all duration-300 group-hover:opacity-90'
                    priority={index < 3} // Load first 3 images with priority
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>
                
                {/* Project Content */}
                <div className='p-5 flex flex-col flex-grow'>
                  <h3 className={`text-lg font-semibold ${colorVariants[color]} text-center mb-3 px-3 py-1 rounded-full`}>
                    {project.title}
                  </h3>
                  
                  <a 
                    href={project.link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='mt-auto flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 group'
                    aria-label={`View ${project.title} project (opens in new tab)`}
                  >
                    <span className="sr-only">View project</span>
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {workData.length > 6 && (
          <motion.div 
            className='text-center mt-12'
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <button
              onClick={toggleProjects}
              className='px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 
              text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-blue-700
              transition-all duration-300 flex items-center gap-2 mx-auto group'
              aria-expanded={showAll}
              aria-controls="projects-list"
            >
              {showAll ? 'Show Less' : 'Show More'}
              <FaExternalLinkAlt 
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

Projects.propTypes = {
  isDarkMode: PropTypes.bool
};

Projects.defaultProps = {
  isDarkMode: false
};

export default Projects;