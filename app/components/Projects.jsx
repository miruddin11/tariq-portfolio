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
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-8 dark:text-black'>
        {displayedProjects.map((project, index) => (
            <motion.div
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            key={index} 
            className='relative aspect-video bg-cover bg-center rounded-lg overflow-hidden group'
            style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div 
            className='absolute bottom-0 left-0 right-0 bg-white w-10/12 rounded-md mx-auto mb-5 py-3 px-5
             flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
            <h2 className='font-semibold'>{project.title}</h2>
            <p className='text-sm text-gray-700'>{project.description}</p>
            </div>
            <div 
            className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
            <motion.a 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:1.1,duration:0.5}}
            href={project.link} target='_blank' rel='noopener noreferrer'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
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
      className='w-max flex items-center justify-center gap-3 
      text-gray-700 border-[0.5px] border-gray-700 rounded-full py-4 px-12 mx-auto mt-10
      hover:bg-lightHover duration-500 dark:text-white dark:border-white 
      dark:hover:bg-darkHover transition group'>
        {showAll ? 'Show Less' : 'Show More'}
        <Image 
          src={isDarkMode? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
          alt='Right arrow'
          className='w-5 ml-2 group-hover:translate-x-1 transition duration-300'
        />
      </motion.button>
    )}
   </motion.div>
  )
}
export default Projects
