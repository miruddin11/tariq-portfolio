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
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Academic Journey
      </motion.h4>
      
      <motion.h2 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5,duration:0.5}}
        className='text-center text-5xl font-Ovo'
      >
        Semester Performance
      </motion.h2>
      
      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        A comprehensive overview of my academic progression, highlighting consistent excellence and growth.
      </motion.p>
      
      <div className="relative w-full max-w-4xl mx-auto py-6">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-800/50 dark:bg-blue-800/50 h-full"></div>
        
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
                className={`absolute h-0.5 bg-blue-800/50 dark:bg-blue-800/50 
                  ${index % 2 === 0 ? 'right-1/2 -mr-0.5 w-[calc(25%+0.5rem)]' : 'left-1/2 -ml-0.5 w-[calc(25%+0.5rem)]'}`}
              >
                {/* Inner invisible part */}
                <div className="absolute inset-y-0 left-0 right-[0.5rem] bg-transparent"></div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 dark:bg-blue-500 rounded-full z-10"></div>
              
              {/* Semester Card */}
              <motion.div
                whileHover={{scale:1.05}}
                className={`w-[40%] border border-gray-400 rounded-lg px-4 py-6 
                  ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
                  hover:shadow-black cursor-pointer 
                  hover:bg-lightHover hover:-translate-y-1 duration-500 
                  dark:hover:bg-darkHover dark:hover:shadow-white`}
              >
                <h3 className='text-base mb-3 text-gray-700 dark:text-white font-semibold'>{semester.semester}</h3>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-xs text-gray-600 dark:text-white/80'>CGPA</p>
                    <p className='font-bold text-sm text-blue-600 dark:text-blue-400'>{semester.cgpa}</p>
                  </div>
                  <div>
                    <p className='text-xs text-gray-600 dark:text-white/80'>Courses</p>
                    <p className='font-bold text-sm text-green-600 dark:text-green-400'>{semester.courses}</p>
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