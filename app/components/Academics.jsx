import React from 'react'
import { motion } from "motion/react"

const academicData = [
  { 
    semester: '1st Sem 2021-2022', 
    cgpa: '9.95', 
    courses: 5
  },
  { 
    semester: '2nd Sem 2021-2022', 
    cgpa: '9.32', 
    courses: 6
  },
  { 
    semester: '3rd Sem 2022-2023', 
    cgpa: '9.74', 
    courses: 5
  },
  { 
    semester: '4th Sem 2022-2023', 
    cgpa: '9.63', 
    courses: 6
  },
  { 
    semester: '5th Sem 2023-2024', 
    cgpa: '9.47', 
    courses: 5
  },
  { 
    semester: '6th Sem 2023-2024', 
    cgpa: '9.7', 
    courses: 6
  },
  { 
    semester: '7th Sem 2024-2025', 
    cgpa: '9.35', 
    courses: 5
  },
  { 
    semester: '8th Sem (Continuing)', 
    cgpa: 'NA', 
    courses: 2
  },
];

const Academics = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="academics" 
      aria-label="Academic Performance Timeline"
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className='text-center mb-2 text-lg font-Ovo text-blue-900 dark:text-blue-200'
      >
        Academic Journey
      </motion.h4>
      
      <motion.h2 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5,duration:0.5}}
        className='text-center text-5xl font-Ovo text-blue-950 dark:text-blue-100'
      >
        Semester Performance
      </motion.h2>
      
      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
      >
        A comprehensive overview of my academic progression, highlighting consistent excellence and growth.
      </motion.p>
      
      <div className="relative w-full max-w-4xl mx-auto py-6">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-400/50 to-blue-600/50 dark:from-blue-600/50 dark:to-blue-800/50 h-full"></div>
        
        <div className="space-y-6">
          {academicData.map((semester, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, x: index % 2 === 0 ? -50 : 50}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.6, delay:0.2 * index}}
              className={`flex items-center w-full relative ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Horizontal Connecting Line */}
              <div 
                className={`absolute h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-600/50 dark:from-blue-600/50 dark:to-blue-800/50 
                  ${index % 2 === 0 ? 'right-1/2 -mr-0.5 w-[calc(25%+0.5rem)]' : 'left-1/2 -ml-0.5 w-[calc(25%+0.5rem)]'}`}
              >
                {/* Inner invisible part */}
                <div className="absolute inset-y-0 left-0 right-[0.5rem] bg-transparent"></div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full z-10 
                              shadow-md ring-4 ring-blue-100/50 dark:ring-blue-900/50 animate-pulse"></div>
              
              {/* Semester Card */}
              <motion.div
                whileHover={{scale:1.05, rotate:1}}
                whileTap={{scale:0.95}}
                role="button"
                tabIndex={0}
                aria-label={`Semester details for ${semester.semester}`}
                className={`w-[40%] border border-blue-200 dark:border-blue-800 rounded-xl px-6 py-7 
                  ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
                  hover:shadow-2xl cursor-pointer 
                  bg-white dark:bg-blue-950/30 backdrop-blur-sm
                  hover:bg-blue-50 hover:-translate-y-2 duration-500 
                  dark:hover:bg-blue-900/50 
                  focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                  transition-all ease-in-out`}
              >
                <h3 className='text-base mb-4 text-blue-900 dark:text-blue-100 font-bold tracking-wide'>{semester.semester}</h3>
                <div className='flex justify-between'>
                  <div className='bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg'>
                    <p className='text-xs text-blue-600 dark:text-blue-300 mb-1'>CGPA</p>
                    <p className='font-bold text-sm text-blue-800 dark:text-blue-200'>{semester.cgpa}</p>
                  </div>
                  <div className='bg-green-50 dark:bg-green-900/30 p-3 rounded-lg'>
                    <p className='text-xs text-green-600 dark:text-green-300 mb-1'>Courses</p>
                    <p className='font-bold text-sm text-green-800 dark:text-green-200'>{semester.courses}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Academics;