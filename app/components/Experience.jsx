import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { assets } from '@/assets/assets'

const experienceData = [
  {
    icon: assets.project_icon,
    title: "Software Development Intern",
    company: "ITJOBXS",
    period: "Oct 2023 - Mar 2024",
    description: "Developed responsive webpage for ITJOBXS, collaborating with design team to create user-friendly layouts and optimize performance, resulting in 70% increase in user traffic.",
    link: "https://itjobxs.com",
    skills: ["HTML", "CSS", "JavaScript", "SQL"]
  },
  {
    icon: assets.project_icon,
    title: "Competitive Programming Lead",
    company: "CodeChef OUTR Chapter",
    period: "Jan 2024 - Dec 2024",
    description: "Boosted member engagement by 50% by organizing targeted training sessions, curated challenges in Java and C++, and contests focused on enhancing coding skills and proficiency in Data Structures and Algorithms",
    link: "https://www.linkedin.com/company/codechef-outr-bbsr-chapter/posts/?feedView=all",
    skills: ["C++", "Java", "Algorithms"]
  }
]

const Experience = ({isDarkMode}) => {
  return (
    <motion.section
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      id="experience" 
      className='w-full px-[5%] lg:px-[12%] py-20 scroll-mt-20 
      bg-lightBg dark:bg-darkBg'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div 
          initial={{y: -50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
          className='text-center mb-16'
        >
          <h4 className='text-center mb-2 text-lg font-Ovo'>
            Professional Journey
          </h4>
          <h1 className='text-center text-5xl font-Ovo'>
            Work Experience
          </h1>
        </motion.div>

        <motion.div 
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.7, staggerChildren: 0.3}}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          {experienceData.map(({icon, title, company, period, description, link, skills}, index) => (
            <motion.div
              key={index}
              whileHover={{scale: 1.05}}
              className='border-[0.5px] border-gray-400 rounded-2xl p-6 
                  cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                  hover:shadow-black dark:border-white dark:hover:shadow-white 
                  dark:hover:bg-darkHover/50'
            >
              <div className='flex items-center mb-5'>
                <Image 
                  src={icon} 
                  alt='' 
                  width={40} 
                  height={40} 
                  className='mr-4 opacity-80 group-hover:opacity-100 transition-opacity'
                />
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {company} | {period}
                  </p>
                </div>
              </div>
              <p className='text-sm text-gray-600 leading-6 dark:text-gray-300 mb-6'>
                {description}
              </p>
              
              {skills && (
                <div className='flex flex-wrap gap-2 mb-6'>
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className='px-3 py-1 bg-gray-100 dark:bg-gray-700 
                      text-xs rounded-full text-gray-700 dark:text-gray-300'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              
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
      </div>
    </motion.section>
  )
}

export default Experience