import React, { useState } from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "framer-motion"

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

const Contact = () => {
    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formSubmitData = new FormData(event.target);

        formSubmitData.append("access_key", "00bc03b5-4336-4a07-b729-985add149856");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formSubmitData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Thank you for your message! I'll get back to you soon.");
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Error", data);
                setResult(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("Network error. Please check your connection.");
        }
    };

    return (
        <motion.section 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            id='contact'
            className='w-full px-[12%] py-20 scroll-mt-20 bg-lightBg dark:bg-darkBg relative overflow-hidden'
        >
            {/* Decorative Background Elements */}
            <motion.div 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:0.5, scale:1}}
                transition={{duration:1, delay:0.5}}
                className='absolute top-0 left-0 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/20 rounded-full 
                -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 pointer-events-none'
            ></motion.div>
            <motion.div 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:0.5, scale:1}}
                transition={{duration:1, delay:0.7}}
                className='absolute bottom-0 right-0 w-80 h-80 bg-purple-100/50 dark:bg-purple-900/20 rounded-full 
                translate-x-1/2 translate-y-1/2 blur-3xl opacity-50 pointer-events-none'
            ></motion.div>

            <div className='max-w-6xl w-full mx-auto relative z-10'>
                <motion.h4
                    initial={{y:-20,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:0.3,duration:0.5}}
                    className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300 tracking-wider uppercase'
                >
                    Get in Touch
                </motion.h4>
                <motion.h2 
                    initial={{y:-20,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:0.5,duration:0.5}}
                    className='text-center text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white mt-2 mb-8'
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:0.7,duration:0.5}} 
                    className='max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-300 text-center mb-16'
                >
                    I'm always open to discussing new projects, opportunities, 
                    or just having a friendly chat. Feel free to reach out, 
                    and I'll do my best to respond promptly.
                </motion.p>

                <motion.form 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:0.9,duration:0.5}}
                    onSubmit={onSubmit} 
                    className='max-w-2xl mx-auto'
                >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                        <motion.div
                            initial={{x:-50,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{delay:1.1,duration:0.6}}
                            whileHover={{scale:1.05}}
                            whileTap={{scale:0.95}}
                            className={`border-[0.5px] border-gray-400 rounded-xl p-6 
                            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                            hover:shadow-lg dark:border-white dark:hover:shadow-white 
                            dark:hover:bg-darkHover/50 transition-all 
                            ${focusedField === 'name' ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                        >
                            <label className='block mb-2 text-gray-700 dark:text-white'>Name</label>
                            <input 
                                type="text" 
                                placeholder='Enter your name' 
                                required
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                                className='w-full bg-transparent border-b border-gray-300 
                                dark:border-white/30 focus:outline-none focus:border-black 
                                dark:focus:border-white pb-2 transition-colors'
                            />
                        </motion.div>

                        <motion.div
                            initial={{x:-50,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{delay:1.2,duration:0.6}}
                            whileHover={{scale:1.05}}
                            whileTap={{scale:0.95}}
                            className={`border-[0.5px] border-gray-400 rounded-xl p-6 
                            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                            hover:shadow-lg dark:border-white dark:hover:shadow-white 
                            dark:hover:bg-darkHover/50 transition-all 
                            ${focusedField === 'email' ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                        >
                            <label className='block mb-2 text-gray-700 dark:text-white'>Email</label>
                            <input
                                type="email" 
                                placeholder='Enter your email' 
                                required
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className='w-full bg-transparent border-b border-gray-300 
                                dark:border-white/30 focus:outline-none focus:border-black 
                                dark:focus:border-white pb-2 transition-colors'
                            />
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{y:100,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        transition={{delay:1.3,duration:0.6}}
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}
                        className={`border-[0.5px] border-gray-400 rounded-xl p-6 mb-8
                        cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                        hover:shadow-lg dark:border-white dark:hover:shadow-white 
                        dark:hover:bg-darkHover/50 transition-all
                        ${focusedField === 'message' ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                    >
                        <label className='block mb-2 text-gray-700 dark:text-white'>Message</label>
                        <textarea
                            rows='6' 
                            placeholder='Enter your message' 
                            required
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                            className='w-full bg-transparent border-b border-gray-300 
                            dark:border-white/30 focus:outline-none focus:border-black 
                            dark:focus:border-white pb-2 resize-none transition-colors'
                        ></textarea>
                    </motion.div>

                    <motion.button 
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}
                        className='w-max flex items-center justify-center gap-3 
                        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-4 px-12 mx-auto
                        hover:bg-lightHover duration-500 dark:text-white dark:border-white 
                        dark:hover:bg-darkHover transition group relative overflow-hidden'
                    >
                        <span className='relative z-10'>Send Message</span>
                        <Image 
                            src={assets.right_arrow_bold} 
                            alt='Right arrow'
                            className='w-5 ml-2 group-hover:translate-x-1 transition duration-300 relative z-10'
                        />
                        <span className='absolute inset-0 bg-gray-200 dark:bg-white/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0'></span>
                    </motion.button>
                    
                    {result && (
                        <motion.p 
                            initial={{opacity:0, y:20}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:0.5}}
                            className='mt-4 text-center text-sm text-gray-600 dark:text-gray-300'
                        >
                            {result}
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </motion.section>
    )
}

export default Contact
