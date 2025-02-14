import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useThemeStore from '@/store/useThemeStore';

const Contact = () => {
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

    const contactInfo = [
        {
            title: 'Email',
            value: 'erdemkarakas26@gmail.com',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            ariaLabel: 'Send email',
        },
        {
            title: 'Phone',
            value: '0531 686 01 83',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            ariaLabel: 'Call phone number',
        },
        {
            title: 'Location',
            value: 'İzmir, Turkey',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            ariaLabel: 'View location',
        },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/erdemkarakas',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/erdemkarakas',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },

    ];

    const handleEmailClick = () => {
        window.location.href = 'mailto:erdemkarakas26@gmail.com?subject=Contact from Portfolio&body=Hi Erdem,%0D%0A%0D%0A';
    };

    return (
        <section className={`py-20 relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="contact">
            {/* Dotted background pattern */}
            {isDarkMode && (
                <div className="absolute inset-0 bg-[radial-gradient(circle,_#0369a1_2px,_transparent_2px)] bg-[length:24px_24px] opacity-[0.15]" />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        Get in Touch
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                    >
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className={`${isDarkMode
                                    ? 'bg-gray-800/50 backdrop-blur-sm'
                                    : 'bg-white'
                                    } p-6 rounded-lg shadow-lg flex items-center space-x-4`}
                                role="group"
                                aria-label={info.ariaLabel}
                            >
                                <div className="text-blue-400">{info.icon}</div>
                                <div className="text-left">
                                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {info.title}
                                    </h3>
                                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center space-x-4 md:space-x-6 mb-12"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 md:p-3 rounded-lg ${isDarkMode
                                    ? 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    } transition-all`}
                                aria-label={`Visit ${link.name} profile`}
                            >
                                <span className="sr-only">{link.name}</span>
                                <div className="w-5 h-5 md:w-6 md:h-6">
                                    {link.icon}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleEmailClick}
                            className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-white transition-all ${isDarkMode
                                ? 'bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30'
                                : 'bg-blue-600 hover:bg-blue-700'
                                } flex items-center space-x-2`}
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm md:text-base">Send Me an Email</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 