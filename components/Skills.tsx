import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useThemeStore from '@/store/useThemeStore';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { isDarkMode } = useThemeStore();

    const skillCategories = [
        {
            title: 'Frontend Technologies',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: [
                { name: 'React', description: 'Building modern, responsive web applications with React ecosystem' },
                { name: 'Next.js', description: 'Server-side rendering and static site generation for React applications' },
                { name: 'TypeScript', description: 'Type-safe JavaScript development with enhanced IDE support' },
                { name: 'Svelte', description: 'Lightweight and efficient UI development' },
                { name: 'JavaScript', description: 'Core language for web development with modern ES6+ features' },
            ],
        },
        {
            title: 'Styling & UI',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            skills: [
                { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
                { name: 'Material UI', description: 'React components implementing Material Design' },
                { name: 'Chakra UI', description: 'Accessible and customizable component library' },
                { name: 'SCSS/SASS', description: 'Advanced CSS preprocessing with variables and mixins' },
                { name: 'Styled Components', description: 'CSS-in-JS styling solution for React components' },
            ],
        },
        {
            title: 'Tools & Testing',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: [
                { name: 'Git', description: 'Version control and collaboration with Git' },
                { name: 'Jest', description: 'JavaScript testing framework with snapshot testing' },
                { name: 'Vitest', description: 'Next generation testing framework for Vite' },
                { name: 'Docker', description: 'Containerization for consistent development environments' },
                { name: 'Webpack', description: 'Module bundling and build optimization' },
            ],
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className={`py-20 relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} id="skills">
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
                >
                    <motion.h2
                        variants={itemVariants}
                        className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Technical Skills
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                variants={itemVariants}
                                className={`${isDarkMode
                                    ? 'bg-gray-800/50 backdrop-blur-sm'
                                    : 'bg-gray-50'
                                    } rounded-lg p-6 shadow-lg group`}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="group/skill">
                                            <div className="flex justify-between mb-1">
                                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                                    {skill.name}
                                                </span>
                                                <div className="flex items-center">
                                                    <svg
                                                        className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {/* Tooltip */}
                                            <div className="absolute left-1/2 -translate-x-1/2 -top-12 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-2 rounded-lg shadow-lg text-sm max-w-xs`}>
                                                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                                                        {skill.description}
                                                    </p>
                                                    <div className={`absolute left-1/2 -bottom-2 w-4 h-4 -translate-x-1/2 rotate-45 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 