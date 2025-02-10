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
    FaExclamationTriangle
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
            className='w-full px-[12%] py-20 scroll-mt-20 bg-lightBg dark:bg-darkBg relative overflow-hidden'
        >
            <div className='max-w-2xl w-full mx-auto relative z-10'>
                <h2 className='text-center text-3xl font-Ovo text-gray-800 dark:text-white mb-8'>
                    Contact Me
                </h2>
                <p className='max-w-xl mx-auto font-Ovo text-gray-700 dark:text-gray-300 text-center mb-12 text-sm'>
                    I'm open to discussing new projects, opportunities, 
                    or just having a friendly chat. Feel free to reach out.
                </p>

                <div className='border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-sm'>
                    <form 
                        onSubmit={onSubmit} 
                        className='space-y-4'
                    >
                        <div className='flex flex-col space-y-4'>
                            <div className='flex flex-col'>
                                <label className='text-sm text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2'>
                                    <FaUser className="text-gray-500 dark:text-gray-300"/> Name
                                </label>
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
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-sm text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2'>
                                    <FaEnvelope className="text-gray-500 dark:text-gray-300"/> Email
                                </label>
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
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-sm text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2'>
                                    <FaPhone className="text-gray-500 dark:text-gray-300"/> Phone
                                </label>
                                <input 
                                    type="tel" 
                                    placeholder='Enter your phone number' 
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className='w-full bg-transparent border-b border-gray-300 
                                    dark:border-white/30 focus:outline-none focus:border-black 
                                    dark:focus:border-white pb-2 transition-colors'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-sm text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2'>
                                    <FaCommentDots className="text-gray-500 dark:text-gray-300"/> Message
                                </label>
                                <textarea
                                    rows='4' 
                                    placeholder='Enter your message' 
                                    required
                                    name='message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className='w-full bg-transparent border-b border-gray-300 
                                    dark:border-white/30 focus:outline-none focus:border-black 
                                    dark:focus:border-white pb-2 resize-none transition-colors'
                                ></textarea>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className='w-full flex items-center justify-center gap-3 
                            bg-transparent text-gray-700 border-[0.5px] border-gray-300 rounded-full py-3 px-6 mt-6
                            hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
                            hover:text-white 
                            duration-300 
                            dark:bg-transparent dark:text-white dark:border-white 
                            dark:hover:bg-gradient-to-r dark:hover:from-blue-400 dark:hover:to-purple-400 
                            transition group
                            shadow-sm hover:shadow-md'
                        >
                            <span>Send Message</span>
                            <FaPaperPlane className='w-4 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition duration-300'/>
                        </button>
                        
                        {result && (
                            <div 
                                className={`mt-4 text-center text-sm flex items-center justify-center gap-2 
                                ${resultType === 'success' ? 'text-green-600 dark:text-green-400' : 
                                  resultType === 'error' ? 'text-red-600 dark:text-red-400' : 
                                  'text-gray-600 dark:text-gray-300'}`}
                            >
                                {resultType === 'success' && <FaCheckCircle />}
                                {resultType === 'error' && <FaExclamationTriangle />}
                                {result}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
