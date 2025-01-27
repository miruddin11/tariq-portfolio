import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { assets } from '@/assets/assets'

const experienceData = [
  {
    icon: assets.project_icon,
    title: "Software Development Intern",
    description: "Developed responsive webpage for ITJOBXS, collaborating with design team to create user-friendly layouts and optimize performance, resulting in 70% increase in user traffic.",
    link:  "https://itjobxs.com",
  },
  {
    icon: assets.project_icon,
    title: "Competitive Programming Lead",
    description: "Boosted member engagement by 50% by organizing targeted training sessions, curated challenges in Java and C++, and contests focused on enhancing coding skills and proficiency in Data Structures and Algorithms",
    link: "https://www.linkedin.com/company/codechef-outr-bbsr-chapter/posts/?feedView=all",
  }
]

const Experience = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="experience" 
      className='w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-transparent to-gray-50/20 dark:to-gray-900/20'
    >
      <motion.h4
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300 tracking-wider'
      >
        Professional Journey
      </motion.h4>
      
      <motion.h2 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5,duration:0.5}}
        className='text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-4'
      >
        Work Experience
      </motion.h2>
      
      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed'
      >
        I have been working on diverse projects, gaining experience in full-stack development and delivering innovative solutions.
      </motion.p>
      
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.9,duration:0.6}} 
        className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'
      >
        {experienceData.map(({icon, title, description, link}, index) => (
          <motion.div
            whileHover={{scale:1.05}}
            key={index} 
            className='border border-gray-200 dark:border-gray-700 rounded-xl px-8 py-10 
            transition-all duration-500 ease-in-out transform 
            hover:shadow-lg hover:border-opacity-0
            bg-white dark:bg-gray-800/50 
            hover:bg-lightHover dark:hover:bg-darkHover
            dark:hover:shadow-white'
          >
            <div className='flex items-center mb-5'>
              <Image 
                src={icon} 
                alt='' 
                width={40} 
                height={40} 
                className='mr-4 opacity-80 group-hover:opacity-100 transition-opacity'
              />
              <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{title}</h3>
            </div>
            <p className='text-sm text-gray-600 leading-6 dark:text-gray-300 mb-6'>
              {description}
            </p>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 
              hover:text-blue-800 dark:hover:text-blue-300 transition-colors group'
            >
              View Details 
              <Image 
                src={assets.right_arrow} 
                alt='View Details' 
                width={16} 
                height={16} 
                className='transition-transform group-hover:translate-x-1'
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience