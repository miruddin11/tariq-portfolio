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
        className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="relative group border-2 border-gray-300 rounded-2xl px-8 py-12 
            transition-all duration-500 ease-in-out
            hover:border-blue-500 hover:shadow-2xl 
            dark:border-gray-700 
            dark:hover:border-blue-300
            overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r 
            from-blue-500 to-blue-300 
            dark:from-blue-300 dark:to-blue-500 
            transform scale-x-0 group-hover:scale-x-100 
            transition-transform duration-500 origin-left"></div>
            <Image 
              src={icon} 
              alt="" 
              className="w-12 mb-4 transition-transform group-hover:rotate-12"
            />
            <h3 className="text-xl font-semibold mb-4 text-gray-800 
            dark:text-white transition-colors group-hover:text-blue-600 
            dark:group-hover:text-blue-300">{title}</h3>
            <p className="text-sm text-gray-600 leading-6 mb-6 
            dark:text-gray-300 opacity-80">{description}</p>
            <a 
              href={link} 
              className="flex items-center gap-2 text-sm font-medium 
              text-blue-600 dark:text-blue-300 
              hover:underline hover:text-blue-800 
              dark:hover:text-blue-200 
              transition-colors"
            >
              Visit Profile 
              <Image 
                src={assets.right_arrow} 
                alt="" 
                className="w-4 transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Coding Activity Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
      >
        {/* GitHub Contributions */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full border-2 border-gray-300 rounded-2xl p-6 
          hover:border-green-500 hover:shadow-2xl 
          dark:border-gray-700 dark:hover:border-green-300 
          transition-all duration-500 group"
        >
          <h3 className="text-xl font-semibold mb-4 text-center 
          text-gray-800 dark:text-white 
          group-hover:text-green-600 dark:group-hover:text-green-300 
          transition-colors">
            GitHub Contributions
          </h3>
          {githubStats ? (
            <div className="space-y-6">
              <img
                src={`https://ghchart.rshah.org/${githubUsername}`}
                alt="GitHub Contribution Chart"
                className="w-full rounded-xl border border-gray-200 
                dark:border-gray-700 shadow-md 
                transition-transform group-hover:scale-105"
              />
              <div className="flex justify-between items-center text-sm 
              text-gray-600 dark:text-gray-300">
                <span className="font-medium">
                  Contributions: 
                  <span className="ml-2 text-green-600 dark:text-green-300">
                    {githubStats.contributionsLastYear}
                  </span>
                </span>
                <a 
                  href={githubStats.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm 
                  text-green-600 dark:text-green-300 
                  hover:underline hover:text-green-800 
                  dark:hover:text-green-200 
                  transition-colors"
                >
                  View Profile 
                  <Image 
                    src={assets.right_arrow} 
                    alt="" 
                    className="w-4 transform group-hover:translate-x-1 
                    transition-transform"
                  />
                </a>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 animate-pulse">
              Loading GitHub stats...
            </p>
          )}
        </motion.div>

        {/* LeetCode Stats */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full border-2 border-gray-300 rounded-2xl p-6 
          hover:border-purple-500 hover:shadow-2xl 
          dark:border-gray-700 dark:hover:border-purple-300 
          transition-all duration-500 group"
        >
          <h3 className="text-xl font-semibold mb-4 text-center 
          text-gray-800 dark:text-white 
          group-hover:text-purple-600 dark:group-hover:text-purple-300 
          transition-colors">
            LeetCode Progress
          </h3>
          {error ? (
            <div className="text-center text-red-500">
              <p>Unable to fetch LeetCode stats</p>
              <p className="text-sm text-gray-500 mt-2">
                Please check your connection or try again later
              </p>
            </div>
          ) : leetcodeStats ? (
            <div className="grid grid-cols-3 gap-4">
              {/* Total Solved */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 
                text-center shadow-md hover:shadow-lg 
                transition-all duration-300 col-span-3 
                border border-purple-100 dark:border-purple-900"
              >
                <p className="font-medium text-xs text-gray-600 
                dark:text-gray-300 mb-1">
                  Total Solved
                </p>
                <p className="text-2xl font-bold text-purple-600 
                dark:text-purple-400 mb-2">
                  {leetcodeStats.totalSolved || 'N/A'}
                </p>
                <div className="flex justify-between text-xs 
                text-gray-500 dark:text-gray-400">
                  <span>Acceptance: {leetcodeStats.acceptanceRate}%</span>
                  <span>Ranking: {leetcodeStats.ranking}</span>
                </div>
              </motion.div>

              {/* Easy Problems */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 dark:bg-green-900 rounded-xl p-4 
                text-center shadow-md hover:shadow-lg 
                transition-all duration-300"
              >
                <p className="font-medium text-xs text-green-700 
                dark:text-green-300 mb-1">
                  Easy
                </p>
                <p className="text-base font-bold text-green-600 
                dark:text-green-400 mb-2">
                  {leetcodeStats.easySolved || 0}
                </p>
              </motion.div>

              {/* Medium Problems */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-50 dark:bg-yellow-900 rounded-xl p-4 
                text-center shadow-md hover:shadow-lg 
                transition-all duration-300"
              >
                <p className="font-medium text-xs text-yellow-700 
                dark:text-yellow-300 mb-1">
                  Medium
                </p>
                <p className="text-base font-bold text-yellow-600 
                dark:text-yellow-400 mb-2">
                  {leetcodeStats.mediumSolved || 0}
                </p>
              </motion.div>

              {/* Hard Problems */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-red-50 dark:bg-red-900 rounded-xl p-4 
                text-center shadow-md hover:shadow-lg 
                transition-all duration-300"
              >
                <p className="font-medium text-xs text-red-700 
                dark:text-red-300 mb-1">
                  Hard
                </p>
                <p className="text-base font-bold text-red-600 
                dark:text-red-400 mb-2">
                  {leetcodeStats.hardSolved || 0}
                </p>
              </motion.div>
            </div>
          ) : (
            <p className="text-center text-gray-500 animate-pulse">
              Loading LeetCode stats...
            </p>

          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cp;
