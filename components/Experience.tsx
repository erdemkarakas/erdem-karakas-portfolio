import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useThemeStore from '../store/useThemeStore';
import Image from 'next/image';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { isDarkMode } = useThemeStore();

    const experiences = [
        {
            company: 'Boyner',
            position: 'Frontend Developer',
            period: '08/2024 – present',
            description: 'Boyner serves millions of customers across Turkey, operating 118 stores in 42 cities with over 600 brands. In 2024,online sales grew by 116%, and the company aims to surpass 40 billion TL in revenue.',
            tech: ['JavaScript', 'React', 'Next.js', 'Redux Toolkit', 'SCSS', 'Bootstrap'],
            link: 'https://www.boyner.com.tr',
            logo: '/images/companies/boyner-logo.png'
        },
        {
            company: 'Akinon',
            position: 'Frontend Developer',
            period: '01/2024 – 08/2024',
            description: 'Cloud-based headless commerce platform developer with an integrated next-generation application suite including marketplace capabilities.Some brands: Crocs, Koton, US Polo, Kelebek, Doğtaş, Emirates',
            tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'i18next', 'Vitest'],
            link: 'https://akinon.com',
            logo: '/images/companies/akinon-logo.png'
        },
        {
            company: 'Overcodex',
            position: 'Frontend Developer',
            period: '01/2023 – 11/2023',
            location: 'İzmir, Turkey',
            description: 'Developed real-time forex exchange applications using Socket.IO and Next.js, enabling seamless data updates and improved SEO. Built CRM systems for forex traders management with role-based authorization. Implemented both CSR and SSR with performance testing.',
            tech: ['TypeScript', 'React', 'Next.js', 'Redux Toolkit', 'Socket.IO', 'Styled Components', 'Tailwind CSS', 'Recharts', 'i18next', 'Vitest'],
            link: 'https://overcodex.com',
            logo: '/images/companies/overcodex-logo.png'
        },
        {
            company: 'GüvenleKirala',
            position: 'Frontend Developer',
            period: '07/2022 – 01/2023',
            location: 'İzmir, Turkey',
            description: 'Developed a real estate management platform with pixel-perfect implementation from Figma designs. Created cross-browser compatible solutions and maintained high code quality standards.',
            tech: ['JavaScript', 'React', 'Next.js', 'Redux Toolkit', 'Chakra UI', 'Tailwind CSS', 'Google Maps React', 'Firebase', 'i18next', 'Vite'],
            link: 'https://guvenlekirala.com',
            logo: '/images/companies/guvenlekirala-logo.png'
        },
        {
            company: 'Turkish Armed Forces',
            position: 'Second Lieutenant',
            period: '04/2021 – 04/2022',
            location: 'Ankara, Turkey',
            description: 'Developed leadership skills, enhanced rhetoric abilities, increased sense of responsibility, and gained valuable teamwork and managerial experience.',
            tech: ['Leadership', 'Team Management', 'Communication'],
            link: 'https://www.tsk.tr',
            logo: '/images/companies/tsk-logo.png'
        },
        {
            company: 'Alpata Technology',
            position: 'Software Developer',
            period: '02/2020 – 04/2021',
            location: 'Eskişehir, Turkey',
            description: 'Contributed to Commodity Exchange software development, creating accounting and management modules. Implemented IoT projects and provided on-site customer support across Turkey.',
            tech: ['C#', 'ASP.NET', 'DevExpress', 'MSSQL', 'Angular', 'Crystal Reports'],
            link: 'https://alpatateknoloji.com',
            logo: !isDarkMode ? '/images/companies/alpata-logo-light.png' : '/images/companies/alpata-logo.png'
        },
    ];

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
        <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="experience">
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
                >
                    <motion.h2
                        variants={itemVariants}
                        className={`text-2xl md:text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Professional Experience
                    </motion.h2>

                    <div className="relative">
                        {/* Timeline dots with year markers - Hidden on mobile */}
                        <div className="hidden md:block">
                            {experiences.map((exp, index) => (
                                <div key={index} className="absolute left-3 transform -translate-x-1/2" style={{ top: `${index * 256}px` }}>
                                    <div className="w-6 h-6 rounded-full border-4 border-blue-500/30 bg-blue-500/20" />
                                    <div className={`absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {exp.period.split('–')[0].trim().split('/')[1]}
                                    </div>
                                </div>
                            ))}

                            {/* Timeline line segments */}
                            {experiences.map((_, index) => (
                                index < experiences.length - 1 && (
                                    <div
                                        key={index}
                                        className="absolute left-3 w-0.5 bg-blue-500/30"
                                        style={{
                                            top: `${index * 256 + 24}px`,
                                            height: '232px'
                                        }}
                                    />
                                )
                            ))}
                        </div>

                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative md:pl-12"
                                >
                                    <div className={`${isDarkMode
                                        ? 'bg-gray-800/50 hover:bg-gray-800/80'
                                        : 'bg-white hover:bg-gray-50'
                                        } rounded-lg shadow-lg p-4 md:p-6 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm`}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                {/* Company Logo */}
                                                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm flex-shrink-0">
                                                    <Image
                                                        src={exp.logo}
                                                        alt={`${exp.company} logo`}
                                                        fill
                                                        className="object-contain p-1"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                        <a
                                                            href={exp.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`group inline-flex items-center hover:text-blue-500 transition-colors ${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
                                                        >
                                                            {exp.company}
                                                            <svg
                                                                className={`w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </h3>
                                                    <p className="text-blue-400 font-medium text-sm md:text-base">
                                                        {exp.position}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-2 md:mt-0">
                                                <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {exp.period}
                                                </p>
                                                {exp.location && (
                                                    <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                                        {exp.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <p className={`text-sm md:text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                                            {exp.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${isDarkMode
                                                        ? 'bg-blue-500/20 text-blue-300'
                                                        : 'bg-blue-100 text-blue-800'
                                                        }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience; 