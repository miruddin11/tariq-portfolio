import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { FaTrophy, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';
import { assets } from '@/assets/assets';

const achievements = [
  {
    id: 1,
    title: "Meta Hacker Cup 2024",
    year: "2024",
    description: "Qualified for Round 2 in Meta's prestigious programming competition",
    icon: <FaTrophy className="text-yellow-500 text-2xl" />,
    certificate: assets.meta,
    verifyUrl: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/1067815518272645" // Add your verification URL here
  },
  {
    id: 2,
    title: "TCS CodeVita Season 12",
    year: "2024",
    description: "Secured a Global Rank of 109 in TCS's global coding competition",
    icon: <FaMedal className="text-blue-500 text-2xl" />,
    certificate: assets.codevita,
    verifyUrl: "https://drive.google.com/file/d/1mW4vROy_PCprggIeWeLUwmCVm8X9vEol/view"
  }
];

const Achievements = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="achievements"
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
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group h-full flex flex-col p-0 rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-l-4 border-t border-r border-b border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 border-l-blue-500 hover:shadow-blue-500/20"
            >
              {/* Image at the top */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-lg bg-gray-50 dark:bg-gray-700/30">
                <Image 
                  src={achievement.certificate}
                  alt={`${achievement.title} Certificate`}
                  fill
                  className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                />
                <motion.a
                  href={achievement.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="View Certificate"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </motion.a>
              </div>

              {/* Content below the image */}
              <div className="p-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;