import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import useThemeStore from '../store/useThemeStore';

const Hero = () => {
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
                delayChildren: 0.3,
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

    const techStack = [
        { name: 'React', color: 'from-blue-400/80 to-blue-600/80' },
        { name: 'Next.js', color: 'from-blue-400/80 to-blue-600/80' },
        { name: 'TypeScript', color: 'from-blue-600/80 to-blue-800/80' },
        { name: 'Svelte', color: 'from-blue-400/80 to-blue-600/80' },
        { name: 'Tailwind', color: 'from-blue-400/80 to-blue-600/80' },
    ];

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
            id="about"
        >
            {/* Dotted background pattern */}
            <div className={`absolute inset-0 ${isDarkMode
                ? 'bg-[radial-gradient(circle,_#0369a1_2px,_transparent_2px)] opacity-[0.15]'
                : 'bg-[radial-gradient(circle,_#1e40af_1px,_transparent_1px)] opacity-[0.08]'
                } bg-[length:24px_24px]`} />

            {/* Animated background shapes */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-100/50'}`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-blue-400/10' : 'bg-blue-50/80'}`}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className={`text-center relative z-10 rounded-2xl ${!isDarkMode && 'bg-white/10 backdrop-blur-sm shadow-xl p-8'}`}>
                    <motion.div
                        variants={itemVariants}
                        className="inline-block mb-8"
                    >
                        <div className="relative w-48 h-48 mx-auto mb-8 [perspective:1000px]">
                            <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode
                                ? 'from-blue-400 to-blue-600 opacity-50'
                                : 'from-blue-600 to-blue-800 opacity-70'
                                } rounded-full md:animate-spin-slow blur-md`} />
                            <div className="relative rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl md:animate-coin-flip">
                                <Image
                                    src="/images/profile.png"
                                    alt="Erdem Karakaş"
                                    width={192}
                                    height={192}
                                    className="rounded-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className={`text-5xl sm:text-7xl font-bold mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-800'
                            }`}
                    >
                        <span className="inline-block">Erdem </span>
                        <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            KARAKAŞ
                        </span>
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className={`text-2xl sm:text-3xl font-semibold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'
                            }`}
                    >
                        Senior Frontend Developer
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}
                    >
                        With 5 years of experience crafting exceptional web experiences.
                        Specializing in building high-performance, user-centric applications
                        that make an impact.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                whileHover={{ y: -5, scale: 1.05 }}
                                whileTap={{ y: 0, scale: 0.95 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode
                                    ? 'from-blue-500/30 to-blue-700/30'
                                    : 'from-blue-600/40 to-blue-800/40'
                                    } rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300`} />
                                <div className={`relative px-6 py-2 rounded-lg bg-gradient-to-r ${isDarkMode ? tech.color : tech.color.replace('/80', '')
                                    } text-white font-medium shadow-lg backdrop-blur-sm`}>
                                    {tech.name}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col md:flex-row justify-center gap-4 md:space-x-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/erdemkarakas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`backdrop-blur-sm px-6 md:px-8 py-3 rounded-lg font-medium shadow-lg transition-colors flex items-center justify-center space-x-2 border ${isDarkMode
                                ? 'bg-blue-500/20 text-white border-blue-500/30 hover:bg-blue-500/30'
                                : 'bg-blue-600/30 text-blue-900 border-blue-600/40 hover:bg-blue-600/40'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm md:text-base">View GitHub</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://linkedin.com/in/erdemkarakas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`backdrop-blur-sm px-6 md:px-8 py-3 rounded-lg font-medium shadow-lg transition-colors flex items-center justify-center space-x-2 border ${isDarkMode
                                ? 'bg-blue-500/20 text-white border-blue-500/30 hover:bg-blue-500/30'
                                : 'bg-blue-600/30 text-blue-900 border-blue-600/40 hover:bg-blue-600/40'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="text-sm md:text-base">Connect on LinkedIn</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="/documents/Erdem-Karakas-CV.pdf"
                            download
                            className={`backdrop-blur-sm px-6 md:px-8 py-3 rounded-lg font-medium shadow-lg transition-colors flex items-center justify-center space-x-2 border ${isDarkMode
                                ? 'bg-blue-500/20 text-white border-blue-500/30 hover:bg-blue-500/30'
                                : 'bg-blue-600/30 text-blue-900 border-blue-600/40 hover:bg-blue-600/40'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-sm md:text-base">Download CV</span>
                        </motion.a>
                    </motion.div>

                    {/* Quote Section */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 mb-20 relative"
                    >
                        <blockquote className="mb-12">
                            <p className={`text-xl md:text-2xl italic font-serif ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                "The only way to do great work is to love what you do."
                            </p>
                            <footer className={`mt-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                ― Steve Jobs
                            </footer>
                        </blockquote>

                        {/* Animated Balls - Hidden on mobile */}
                        <div className="hidden md:flex justify-center items-center gap-4">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`relative group`}
                                >
                                    <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                                        } blur-xl rounded-full opacity-20 group-hover:opacity-30 transition-opacity`} />
                                    <motion.div
                                        className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${isDarkMode
                                            ? 'bg-gradient-to-r from-blue-400 to-blue-500'
                                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                                            } shadow-lg`}
                                        animate={{
                                            y: [0, -15, 0],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: 3,
                                            delay: i * 0.3,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'} rounded-full flex justify-center`}>
                    <div className={`w-1.5 h-3 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mt-2 animate-bounce`} />
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;