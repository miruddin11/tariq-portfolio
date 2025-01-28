import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { assets, infoList, toolsData } from '@/assets/assets'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

const About = ({isDarkMode}) => {
  return (
    <motion.section 
      id='about'
      className='w-full px-[12%] py-20 scroll-mt-20 bg-lightBg dark:bg-darkBg'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className='max-w-6xl w-full mx-auto'>
        <motion.div variants={itemVariants} className='text-center mb-12'>
          <motion.h4 
            className='text-lg font-Ovo text-gray-600 dark:text-gray-300 tracking-wider uppercase'
          >
            Introduction
          </motion.h4>
          <motion.h2 
            className='text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white mt-2 mb-8'
          >
            About Me
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20'
        >
          {/* Profile Image */}
          <motion.div 
            className='w-64 sm:w-80 rounded-3xl overflow-hidden'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={assets.user_image} 
              alt='Profile' 
              className='w-full rounded-3xl'
            />
          </motion.div>

          {/* About Content */}
          <motion.div className='flex-1'>
            <motion.p 
              variants={itemVariants}
              className='mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300'
            >
              Code is my canvas, and technology is my paintbrush. As a Full Stack Developer, 
              I craft digital experiences that breathe life into ideas, transforming complex 
              concepts into intuitive, high-performance web applications. Specializing in 
              React, Next.js, and Node.js, I don't just write code—I engineer solutions that 
              push the boundaries of what's possible, one line at a time.
            </motion.p>

            {/* Key Info Grid */}
            <motion.div 
              variants={itemVariants}
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
            >
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <motion.div
                  key={index}
                  whileHover={{scale:1.05}}
                  className='border-[0.5px] border-gray-400 rounded-xl p-6 
                  cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                  hover:shadow-black dark:border-white dark:hover:shadow-white 
                  dark:hover:bg-darkHover/50'
                >
                  <Image 
                    src={isDarkMode ? iconDark : icon} 
                    alt={title} 
                    className='w-7 mt-3'
                  />
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>
                    {title}
                  </h3>
                  <p className='text-gray-600 text-sm dark:text-white/80'>
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tools Section */}
            <motion.div variants={itemVariants}>
              <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
                Tools I Use
              </h4>
              <motion.div 
                className='flex items-center gap-3 sm:gap-5'
                variants={containerVariants}
              >
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{scale:1.1}}
                    className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                    border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer 
                    hover:-translate-y-1 duration-500 
                    hover:shadow-lg hover:border-opacity-0
                    hover:bg-lightHover dark:hover:bg-darkHover
                    dark:hover:shadow-white'
                  >
                    <Image 
                      src={tool} 
                      alt='Tool' 
                      className='w-5 sm:w-7'
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
