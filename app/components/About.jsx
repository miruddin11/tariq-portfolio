import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { assets, infoList } from '@/assets/assets'

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
      className='w-full px-4 sm:px-8 md:px-[12%] py-12 sm:py-16 md:py-20 scroll-mt-20 bg-lightBg dark:bg-darkBg'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className='max-w-6xl w-full mx-auto'>
        <motion.div variants={itemVariants} className='text-center mb-8 sm:mb-12'>
          <motion.h4 
            className='text-base sm:text-lg font-Ovo text-gray-600 dark:text-gray-300 tracking-wider uppercase'
          >
            Introduction
          </motion.h4>
          <motion.h2 
            className='text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white mt-2 mb-6 sm:mb-8'
          >
            About Me
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center justify-center lg:pl-8 xl:pl-12'
        >
          {/* Profile Image */}
          <motion.div 
            className='flex justify-center items-center w-full'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100 
            }}
          >
            <div className='w-40 sm:w-56 md:w-72 lg:w-80 rounded-2xl overflow-hidden 
            shadow-xl border-2 border-white/80 dark:border-gray-800/80
            transform transition-all duration-500 
            hover:scale-105 hover:shadow-2xl'>
              <Image 
                src={assets.user_image} 
                alt='Tariq Uddin - Full Stack Developer' 
                className='w-full h-full object-cover rounded-2xl
                transition-all duration-500 ease-in-out'
                priority
                width={320}
                height={320}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className='flex flex-col justify-center space-y-6 sm:space-y-8 w-full'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100 
            }}
          >
            <motion.p 
              variants={itemVariants}
              className='text-sm sm:text-base md:text-lg font-Ovo text-gray-700 dark:text-gray-300 
              leading-relaxed tracking-wide text-center lg:text-left
              bg-gradient-to-r from-blue-600 to-purple-600 
              bg-clip-text text-transparent'
            >
              A passionate Full Stack Developer transforming complex ideas into elegant digital solutions. 
              Specializing in React, Next.js, and Node.js, I craft immersive web experiences that solve 
              problems and tell compelling stories through code.
            </motion.p>

            {/* Personal Details */}
            <motion.div 
              variants={itemVariants}
              className='w-full max-w-2xl mx-auto lg:mx-0 bg-gradient-to-br from-purple-50 to-blue-100 
              dark:from-purple-900/30 dark:to-blue-900/30 
              p-4 sm:p-6 rounded-2xl border border-purple-200/50 
              dark:border-blue-800/30 
              shadow-xl dark:shadow-2xl 
              transform transition-all duration-500 
              hover:scale-[1.02] hover:shadow-2xl 
              lg:mt-0 mt-6'
            >
              {[
                { 
                  label: 'University', 
                  value: 'Odisha University of Technology and Research, Bhubaneswar',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                { 
                  label: 'Branch', 
                  value: 'Computer Science and Engineering',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  label: 'Current Status', 
                  value: 'Graduated (Batch 2021-25)',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )
                },
                { 
                  label: 'Location', 
                  value: 'Bhubaneswar, Odisha, India',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  label: 'Email', 
                  value: 'mirtariquddin666@gmail.com',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                }
              ].map(({label, value, icon}, index) => (
                <motion.div 
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.2, 
                    type: "spring", 
                    stiffness: 100 
                  }}
                  className='flex items-center space-x-2 sm:space-x-4 p-2 sm:p-3 
                  bg-white/60 dark:bg-black/30 
                  rounded-xl 
                  shadow-md 
                  hover:bg-gradient-to-r 
                  hover:from-purple-100 hover:to-blue-100
                  dark:hover:from-purple-900/50 dark:hover:to-blue-900/50
                  transition-all duration-500 
                  group'
                >
                  <div className='p-1.5 sm:p-2 bg-gray-100 dark:bg-gray-800 rounded-full'>
                    {icon}
                  </div>
                  <div>
                    <span className='block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                      {label}
                    </span>
                    <p className='text-xs sm:text-sm text-gray-800 dark:text-white font-semibold group-hover:text-purple-700 dark:group-hover:text-blue-300 transition-colors'>
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About