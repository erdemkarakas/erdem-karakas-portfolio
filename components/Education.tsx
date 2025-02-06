import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import useThemeStore from '@/store/useThemeStore';

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { isDarkMode } = useThemeStore();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className={`pt-20 pb-10 relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} id="education">
            {/* Dotted background pattern */}
            {isDarkMode && (
                <div className="absolute inset-0 bg-[radial-gradient(circle,_#0369a1_2px,_transparent_2px)] bg-[length:24px_24px] opacity-[0.15]" />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className={`text-3xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Education
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className={`max-w-3xl mx-auto ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} 
                            rounded-2xl p-8 backdrop-blur-sm shadow-lg`}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                                <div className={`absolute inset-0 rounded-xl ${isDarkMode ? 'bg-white' : 'bg-blue-50'}`} />
                                <Image
                                    src="/images/duzce-university-logo.png"
                                    alt="Duzce University"
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Computer Engineering, Bachelor's Degree
                                </h3>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                                    <a
                                        href="https://duzce.edu.tr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                                    >
                                        <span className="font-semibold">Duzce University</span>
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        2014 – 2019 | Düzce, Turkey
                                    </span>
                                </div>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Completed a comprehensive program in Computer Engineering, focusing on software development,
                                    algorithms, and computer systems. Developed strong problem-solving skills and technical expertise
                                    through practical projects and theoretical coursework.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education; 