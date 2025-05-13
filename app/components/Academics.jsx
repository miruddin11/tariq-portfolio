import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import UniversityLogo from '@/assets/university-logo.png'

const academicData = [
  { 
    semester: '1st Semester', 
    cgpa: '9.95', 
    courses: 5
  },
  { 
    semester: '2nd Semester', 
    cgpa: '9.32', 
    courses: 6
  },
  { 
    semester: '3rd Semester', 
    cgpa: '9.74', 
    courses: 5
  },
  { 
    semester: '4th Semester', 
    cgpa: '9.63', 
    courses: 6
  },
  { 
    semester: '5th Semester', 
    cgpa: '9.47', 
    courses: 5
  },
  { 
    semester: '6th Semester', 
    cgpa: '9.7', 
    courses: 6
  },
  { 
    semester: '7th Semester', 
    cgpa: '9.35', 
    courses: 5
  },
  { 
    semester: '8th Semester', 
    cgpa: '10', 
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
      <div className='flex flex-col items-center mb-8'>
        <Image 
          src={UniversityLogo} 
          alt="Odisha University of Technology and Research Logo" 
          width={120} 
          height={120} 
          className='mb-4 p-2 bg-white rounded-xl shadow-md dark:bg-blue-100 dark:brightness-100'
        />
        <h2 className='text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-200 text-center mb-2'>
          Odisha University of Technology and Research, Bhubaneswar
        </h2>
        <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 text-center'>
          Bachelor of Technology in Computer Science and Engineering
        </p>
      </div>

      {/* <div className='text-center mb-8'>
        <h3 className='text-xl md:text-2xl font-Ovo text-blue-900 dark:text-blue-200 mb-2'>
          Academic <span className="text-blue-600 dark:text-blue-300">Journey</span>
        </h3>
      </div> */}
      
      <div className="w-full max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {academicData.map((semester, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: index * 0.1}}
              whileHover={{scale: 1.05}}
              className={`
                bg-white dark:bg-gray-800/50 
                border border-gray-200 dark:border-gray-700 
                rounded-xl 
                p-4 
                shadow-md 
                transform 
                transition-all 
                duration-300 
                ease-in-out
                flex 
                flex-col 
                items-center 
                text-center
              `}
            >
              <div className="mb-3 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-800 dark:text-blue-200 font-bold text-lg">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {semester.semester}
              </h3>
              
              <div className="flex justify-between w-full space-x-2 mb-2">
                <div className="flex-1 bg-white dark:bg-gray-800/50 p-2 rounded-lg shadow-sm">
                  <p className="text-[10px] uppercase tracking-wider text-blue-600 dark:text-blue-300 mb-1">
                    SGPA
                  </p>
                  <p className="font-bold text-base text-gray-700 dark:text-gray-300">
                    {semester.cgpa}
                  </p>
                </div>
                
                <div className="flex-1 bg-white dark:bg-gray-800/50 p-2 rounded-lg shadow-sm">
                  <p className="text-[10px] uppercase tracking-wider text-green-600 dark:text-green-300 mb-1">
                    Courses
                  </p>
                  <p className="font-bold text-base text-green-800 dark:text-green-200">
                    {semester.courses}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Overall CGPA Section */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="w-full max-w-5xl mx-auto px-4 py-6 text-center"
      >
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md inline-block">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2">
            Cumulative Grade Point Average
          </p>
          <p className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
            9.64 
            <span className="text-sm ml-1 text-gray-600 dark:text-gray-400">(91.4%)</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Academics;