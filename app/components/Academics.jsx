import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import UniversityLogo from '@/assets/university-logo.png'

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
      className='w-full px-4 md:px-[12%] py-6 md:py-10 scroll-mt-20'
    >
      {/* University Details Section */}
      <motion.div
        initial={{opacity:0, y: 20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        className='flex flex-col items-center mb-10 space-y-4'
      >
        <Image 
          src={UniversityLogo} 
          alt="Odisha University of Technology and Research Logo" 
          width={150} 
          height={150} 
          className='mb-4 p-2 bg-white rounded-xl shadow-md dark:bg-blue-100 dark:brightness-100'
        />
        <h2 className='text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-200 text-center'>
          Odisha University of Technology and Research
        </h2>
        <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 text-center'>
          Bachelor of Technology in Computer Science and Engineering
        </p>
        <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 text-center'>
          4th Year | 8th Semester | Bhubaneswar, Odisha
        </p>
      </motion.div>

      <motion.h4
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className='text-center mb-2 text-base md:text-lg font-Ovo text-blue-900 dark:text-blue-200'
      >
        Academic Voyage at <span className="text-blue-600 dark:text-blue-300">OUTR</span>
      </motion.h4>
      
      <motion.h2 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5,duration:0.5}}
        className='text-center text-3xl md:text-5xl font-Ovo text-blue-950 dark:text-blue-100'
      >
        Semester Performance <span className="text-blue-600 dark:text-blue-300">Decoded</span>
      </motion.h2>
      
      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}} 
        className='text-center max-w-2xl mx-auto mt-3 md:mt-5 mb-6 md:mb-12 text-sm md:text-base font-Ovo text-gray-700 dark:text-gray-300'
      >
        Unveiling my academic journey at Odisha University of Technology and Research (OUTR), 
        a narrative of consistent excellence and intellectual growth across semesters.
      </motion.p>
      
      <div className="w-full max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {academicData.map((semester, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: index * 0.1}}
              whileHover={{scale: 1.05}}
              className={`
                bg-white dark:bg-blue-950/30 
                border border-blue-200 dark:border-blue-800 
                rounded-xl 
                p-4 
                shadow-md 
                hover:shadow-xl 
                transform 
                transition-all 
                duration-300 
                ease-in-out
                flex 
                flex-col 
                items-center 
                text-center
                backdrop-blur-sm
              `}
            >
              <div className="mb-2 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-800 dark:text-blue-200 font-bold text-lg">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {semester.semester}
              </h3>
              
              <div className="flex justify-between w-full space-x-2">
                <div className="flex-1 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                  <p className="text-[10px] text-blue-600 dark:text-blue-300 mb-1">CGPA</p>
                  <p className="font-bold text-xs text-blue-800 dark:text-blue-200">
                    {semester.cgpa}
                  </p>
                </div>
                
                <div className="flex-1 bg-green-50 dark:bg-green-900/30 p-2 rounded-lg">
                  <p className="text-[10px] text-green-600 dark:text-green-300 mb-1">Courses</p>
                  <p className="font-bold text-xs text-green-800 dark:text-green-200">
                    {semester.courses}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Academics;