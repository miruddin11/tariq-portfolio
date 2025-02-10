import { assets, workData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from "motion/react";

const Projects = ({isDarkMode}) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? workData : workData.slice(0, 6);

  const toggleProjects = () => {
    setShowAll(!showAll);
  };

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='projects'className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.3,duration:0.5}}
      className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
      <motion.h2 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.5,duration:0.5}}
      className='text-center text-5xl font-Ovo'>Projects</motion.h2>
      
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.7,duration:0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I have worked on a variety of projects, ranging from simple websites to complex web applications. Here are some of the projects I have worked on:
      </motion.p>

      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9,duration:0.6}}
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-8'>
        {displayedProjects.map((project, index) => (
            <motion.div
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            key={index} 
            className='relative aspect-video bg-cover bg-center rounded-2xl overflow-hidden group 
            shadow-lg hover:shadow-2xl transition-all duration-500 
            border-2 border-transparent hover:border-blue-500 
            dark:border-gray-700 dark:hover:border-blue-300'
            style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div 
            className='absolute bottom-0 left-0 right-0 
            bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm 
            w-11/12 rounded-xl mx-auto mb-6 py-4 px-6
            flex items-center justify-between 
            shadow-lg transition-all duration-500 
            transform group-hover:-translate-y-2 
            dark:text-white'
            >
            <div>
            <h2 className='font-bold text-lg text-gray-800 dark:text-white 
            mb-1 transition-colors group-hover:text-blue-600 
            dark:group-hover:text-blue-300'>{project.title}</h2>
            <p className='text-sm text-gray-600 dark:text-gray-300 
            line-clamp-2'>{project.description}</p>
            </div>
            <div 
            className='w-12 h-12 rounded-full 
            bg-blue-500 dark:bg-blue-300 text-white 
            flex items-center justify-center 
            shadow-lg hover:shadow-xl 
            transform transition-all duration-300 
            hover:rotate-12 hover:scale-110'>
             <motion.a 
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{delay:1.1,duration:0.5}}
             href={project.link} target='_blank' rel='noopener noreferrer'>
                <Image 
                  src={assets.send_icon} 
                  alt='send icon' 
                  className='w-6 filter brightness-0 invert 
                  dark:filter-none'
                />
             </motion.a>
            </div>
          </div>
        </motion.div>
        ))}
    </motion.div>
    {workData.length > 2 && (
      <motion.button 
      onClick={toggleProjects}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:1.2,duration:0.6}}
      className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
      text-white font-bold rounded-full shadow-lg hover:scale-105 
      transition-all duration-300 ease-in-out relative
      mx-auto mt-10 flex items-center justify-center gap-3 group'
      >
        {showAll ? 'Show Less' : 'Show More'}
        <Image 
          src={assets.right_arrow_bold_dark} 
          alt='Right arrow'
          className='w-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition duration-300 
          filter brightness-0 invert dark:filter-none'
        />
      </motion.button>
    )}
   </motion.div>
  )
}
export default Projects
