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
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Professional Journey
      </motion.h4>
      
      <motion.h2 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5,duration:0.5}}
        className='text-center text-5xl font-Ovo'
      >
        Work Experience
      </motion.h2>
      
      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I have been working on diverse projects, gaining experience in full-stack development and delivering innovative solutions.
      </motion.p>
      
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.9,duration:0.6}} 
        className='grid grid-cols-auto gap-6 my-10'
      >
        {experienceData.map(({icon, title, description, link}, index) => (
          <motion.div
            whileHover={{scale:1.05}}
            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover 
            dark:hover:shadow-white'
          >
            <Image src={icon} alt='' className='w-10'/>
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 mt-5 text-sm'>
              View Details <Image src={assets.right_arrow} alt='' className='w-4'/>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience