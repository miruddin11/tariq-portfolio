import React, { useState } from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "framer-motion"
import { 
    FaUser, 
    FaEnvelope, 
    FaCommentDots, 
    FaPhone,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationTriangle,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub
} from 'react-icons/fa';

const Contact = () => {
    const [result, setResult] = useState("");
    const [resultType, setResultType] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

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
        setResultType("info");
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
                setResultType("success");
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                console.error("Error", data);
                setResult(data.message || "Something went wrong. Please try again.");
                setResultType("error");
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("Network error. Please check your connection.");
            setResultType("error");
        }
    };

    return (
        <motion.section 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            id='contact'
            className='w-full px-[5%] py-16 scroll-mt-20 bg-lightBg dark:bg-darkBg relative overflow-hidden font-Ovo'
        >
            <div className='max-w-5xl w-full mx-auto relative z-10'>
                <div className='text-center mb-10'>
                    <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-3'>
                        Get In Touch
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'></div>
                </div>
                
                <div className='flex flex-col lg:flex-row gap-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg'>
                    {/* Left Side - Contact Info */}
                    <div className='lg:w-2/5'>
                        <h3 className='text-xl font-medium text-gray-800 dark:text-white mb-6 flex items-center'>
                            <span className='w-1 h-6 bg-blue-500 mr-3 rounded-full'></span>
                            Let's have a talk
                        </h3>
                        <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6'>
                            If you want any help or just want to do a normal chat, then get in touch.
                        </p>
                        
                        <div className='space-y-4'>
                            <div className='flex items-start gap-3 group'>
                                <div className='w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200'>
                                    <FaUser className='text-blue-600 dark:text-blue-400 text-sm' />
                                </div>
                                <div>
                                    <h4 className='text-xs font-medium text-gray-500 dark:text-gray-400 mb-0.5'>Name</h4>
                                    <p className='text-sm text-gray-800 dark:text-gray-200'>Mir Tariquddin</p>
                                </div>
                            </div>
                            
                            <div className='flex items-start gap-3 group'>
                                <div className='w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200'>
                                    <FaEnvelope className='text-green-600 dark:text-green-400 text-sm' />
                                </div>
                                <div>
                                    <h4 className='text-xs font-medium text-gray-500 dark:text-gray-400 mb-0.5'>Email</h4>
                                    <a href='mailto:mirtariquddin666@gmail.com' className='text-sm text-blue-600 dark:text-blue-400 hover:underline'>
                                        mirtariquddin666@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className='flex items-start gap-3 group'>
                                <div className='w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200'>
                                    <FaMapMarkerAlt className='text-purple-600 dark:text-purple-400 text-sm' />
                                </div>
                                <div>
                                    <h4 className='text-xs font-medium text-gray-500 dark:text-gray-400 mb-0.5'>Location</h4>
                                    <p className='text-sm text-gray-800 dark:text-gray-200'>Bhubaneswar, Odisha, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className='lg:w-3/5'>
                        <h3 className='text-xl font-medium text-gray-800 dark:text-white mb-6 flex items-center'>
                            <span className='w-1 h-6 bg-purple-500 mr-3 rounded-full'></span>
                            Message me
                        </h3>
                        
                        <form 
                            onSubmit={onSubmit} 
                            className='space-y-4'
                            autoComplete='off'
                        >
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <label className='text-xs font-medium text-gray-600 dark:text-gray-400 mb-1'>
                                        Your Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        required
                                        name='name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        autoComplete='off'
                                        className='w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 transition-colors'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='text-xs font-medium text-gray-600 dark:text-gray-400 mb-1'>
                                        Your Email <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type="email" 
                                        required
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        autoComplete='off'
                                        className='w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 transition-colors'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-xs font-medium text-gray-600 dark:text-gray-400 mb-1'>
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                    className='w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 transition-colors'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-xs font-medium text-gray-600 dark:text-gray-400 mb-1'>
                                    Your Message <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    rows='3' 
                                    required
                                    name='message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                    className='w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 resize-none transition-colors'
                                ></textarea>
                            </div>

                            <div className='flex items-center justify-between pt-1'>
                                <span className='text-xs text-gray-500 dark:text-gray-400'>
                                    * Required fields
                                </span>
                                <button 
                                    type="submit"
                                    className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm font-medium py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane className='w-3.5 h-3.5'/>
                                </button>
                            </div>
                            
                            {result && (
                                <div 
                                    className={`mt-3 p-3 rounded-lg text-sm ${
                                        resultType === 'success' 
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                    } flex items-center gap-2`}
                                >
                                    {resultType === 'success' ? (
                                        <FaCheckCircle className='flex-shrink-0' />
                                    ) : (
                                        <FaExclamationTriangle className='flex-shrink-0' />
                                    )}
                                    <span>{result}</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
