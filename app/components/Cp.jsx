import React, { useState, useEffect } from 'react';
import { serviceData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Cp = ({ isDarkMode }) => {
  const githubUsername = 'miruddin11';
  const leetcodeUsername = 'mirtariq';
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [githubStats, setGithubStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetcodeStats = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
        const data = await response.json();
        setLeetcodeStats({
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          totalSolved: data.totalSolved || 0,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 'N/A'
        });
      } catch (error) {
        console.error('Failed to fetch LeetCode stats:', error);
        setError(error.message);
      }
    };

    const fetchGithubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/events`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }
        
        const events = await response.json();
        const contributionsLastYear = events.filter(event => 
          event.type === 'PushEvent' || 
          event.type === 'CreateEvent' || 
          event.type === 'PullRequestEvent'
        ).length;

        setGithubStats({
          contributionsLastYear,
          profileUrl: `https://github.com/${githubUsername}`
        });
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        setError(error.message);
      }
    };

    fetchLeetcodeStats();
    fetchGithubStats();
  }, [githubUsername, leetcodeUsername]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="cp"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        About Competitive Programming
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Profiles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I have been doing competitive programming for the past 3 years. I have participated in various contests and
        have been able to achieve good ranks in them. Here are some of my profiles where you can see my ratings and
        rankings.
      </motion.p>

      {/* Competitive Programming Profiles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
            cursor pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover 
            dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a href={link} className="flex items-center gap-2 mt-5 text-sm">
              Visit Profile <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Coding Activity Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10"
      >
        {/* GitHub Contributions */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-xl border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
          cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover 
          dark:hover:shadow-white transform transition-all ease-in-out"
        >
          <h3 className="text-lg my-4 text-gray-700 dark:text-white text-center">
            GitHub Contributions
          </h3>
          {githubStats ? (
            <div className="space-y-4">
              <img
                src={`https://ghchart.rshah.org/${githubUsername}`}
                alt="GitHub Contribution Chart"
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
              />
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                <span>Contributions: {githubStats.contributionsLastYear}</span>
                <a 
                  href={githubStats.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm"
                >
                  View Profile <Image src={assets.right_arrow} alt="" className="w-4" />
                </a>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 animate-pulse">Loading GitHub stats...</p>
          )}
        </motion.div>

        {/* LeetCode Stats */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md border border-gray-400 rounded-lg px-4 py-6 hover:shadow-black 
          cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover 
          dark:hover:shadow-white transform transition-all ease-in-out"
        >
          <h3 className="text-md my-2 text-gray-700 dark:text-white text-center">
            LeetCode Progress
          </h3>
          {error ? (
            <div className="text-center text-red-500">
              <p>Unable to fetch LeetCode stats</p>
              <p className="text-sm text-gray-500 mt-2">Please check your connection or try again later</p>
            </div>
          ) : leetcodeStats ? (
            <div className="grid grid-cols-2 gap-2">
              {/* Total Solved */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-2 text-center shadow-md hover:shadow-lg transition-all duration-300 col-span-2"
              >
                <p className="font-semibold text-xs text-gray-600 dark:text-gray-300">Total Solved</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {leetcodeStats.totalSolved || 'N/A'}
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Acceptance: {leetcodeStats.acceptanceRate}%</span>
                  <span>Ranking: {leetcodeStats.ranking}</span>
                </div>
              </motion.div>

              {/* Easy Problems */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 dark:bg-green-900 rounded-lg p-2 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <p className="font-semibold text-xs text-green-700 dark:text-green-300">Easy</p>
                <p className="text-base font-bold text-green-600 dark:text-green-400">
                  {leetcodeStats.easySolved || 0}
                </p>
              </motion.div>

              {/* Medium Problems */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-2 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <p className="font-semibold text-xs text-yellow-700 dark:text-yellow-300">Medium</p>
                <p className="text-base font-bold text-yellow-600 dark:text-yellow-400">
                  {leetcodeStats.mediumSolved || 0}
                </p>
              </motion.div>

              {/* Hard Problems */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-red-50 dark:bg-red-900 rounded-lg p-2 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <p className="font-semibold text-xs text-red-700 dark:text-red-300">Hard</p>
                <p className="text-base font-bold text-red-600 dark:text-red-400">
                  {leetcodeStats.hardSolved || 0}
                </p>
              </motion.div>
            </div>
          ) : (
            <p className="text-center text-gray-500 animate-pulse">Loading LeetCode stats...</p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cp;
