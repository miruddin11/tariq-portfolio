import React from 'react'
import { motion } from "framer-motion"
import { FaLaptopCode, FaGraduationCap, FaCode, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experienceData = [
    {
      icon: <FaCode className="w-5 h-5 text-indigo-500" />,
      title: "Competitive Programming Lead",
      company: "CodeChef OUTR Chapter",
      period: "Jan 2024 - Dec 2024",
      description: "Boosted member engagement by 50% by organizing targeted training sessions, curated challenges in Java and C++, and contests focused on enhancing coding skills and proficiency in Data Structures and Algorithms.",
      link: "https://www.linkedin.com/company/codechef-outr-bbsr-chapter/posts/?feedView=all",
      skills: ["C++", "Java", "Algorithms"],
      color: 'indigo'
    },
    {
      icon: <FaLaptopCode className="w-5 h-5 text-blue-500" />,
      title: "Software Development Intern",
      company: "ITJOBXS",
      period: "Oct 2023 - Mar 2024",
      description: "Developed responsive webpage for ITJOBXS, collaborating with design team to create user-friendly layouts and optimize performance, resulting in 70% increase in user traffic.",
      link: "https://itjobxs.com",
      skills: ["HTML", "CSS", "JavaScript", "SQL"],
      color: 'blue'
    },
    {
      icon: <FaGraduationCap className="w-5 h-5 text-cyan-500" />,
      title: "Teaching Assistant - C++ & Web Dev",
      company: "Coding Ninjas",
      period: "Jun 2022 - Sep 2023",
      description: "Mentored students in C++ programming and web development, helping them understand complex concepts and debug their code. Conducted doubt resolution sessions and provided guidance on best practices in software development.",
      link: "https://www.codingninjas.com/",
      skills: ["C++", "Data Structures", "Algorithms", "Web Development"],
      color: 'cyan'
    },
    {
      icon: <FaBriefcase className="w-5 h-5 text-green-500" />,
      title: "Subject Matter Expert - Coding",
      company: "Unacademy",
      period: "Apr 2022 - May 2023",
      description: "Created educational content and solved complex coding problems for competitive programming. Assisted in curriculum development and provided expert guidance on C++ and data structures.",
      link: "https://unacademy.com/",
      skills: ["C++", "Competitive Programming", "DSA", "Teaching"],
      color: 'green'
    }
  ]

  const colorVariants = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="experience" 
      className='w-full px-4 sm:px-8 md:px-[12%] py-12 sm:py-16 md:py-20 scroll-mt-20 bg-lightBg dark:bg-darkBg'
    >
      <div className='max-w-6xl w-full mx-auto'>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-center mb-10 sm:mb-14'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white'>
            Work Experience
          </h2>
        </motion.div>

        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 gap-6'
        >
          {experienceData.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.link}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className={`group p-6 rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-l-4 border-t border-r border-b border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 ${
                colorVariants[exp.color].includes('indigo') ? 'border-l-indigo-500 hover:shadow-indigo-500/20' : 
                colorVariants[exp.color].includes('blue') ? 'border-l-blue-500 hover:shadow-blue-500/20' :
                colorVariants[exp.color].includes('cyan') ? 'border-l-cyan-500 hover:shadow-cyan-500/20' :
                'border-l-green-500 hover:shadow-green-500/20'}`}
            >
              <div className='flex items-start gap-4'>
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${colorVariants[exp.color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {exp.icon}
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>{exp.title}</h3>
                  <p className='text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors'>{exp.company} • <span className='text-sm'>{exp.period}</span></p>
                  <p className='text-gray-600 dark:text-gray-300 mt-2 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors'>{exp.description}</p>
                  <div className='flex flex-wrap gap-2 mt-3'>
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`px-2 py-1 text-xs rounded-full ${
                          colorVariants[exp.color]
                            .replace('text-cyan-600', 'text-cyan-700 dark:text-cyan-300')
                            .replace('text-indigo-600', 'text-indigo-700 dark:text-indigo-300')
                            .replace('text-blue-600', 'text-blue-700 dark:text-blue-300')
                            .replace('text-green-600', 'text-green-700 dark:text-green-300')
                        } bg-opacity-20 dark:bg-opacity-20`}
                      >
                        {skill}
                      </span>
                    ))}
                    <FaExternalLinkAlt className='w-3 h-3 ml-1 mt-1.5 text-gray-400 group-hover:text-blue-500 transition-colors' />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience