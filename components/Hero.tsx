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
        {
            name: 'React',
            color: 'from-cyan-400/80 to-cyan-600/80',
            link: 'https://react.dev',
            logo: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
                </svg>
            )
        },
        {
            name: 'Next.js',
            color: 'from-gray-600/80 to-gray-800/80',
            link: 'https://nextjs.org',
            logo: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                </svg>
            )
        },
        {
            name: 'TypeScript',
            color: 'from-blue-500/80 to-blue-700/80',
            link: 'https://www.typescriptlang.org',
            logo: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
            )
        },
        {
            name: 'Svelte',
            color: 'from-orange-500/80 to-orange-700/80',
            link: 'https://svelte.dev',
            logo: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z" />
                </svg>
            )
        },
        {
            name: 'Tailwind',
            color: 'from-teal-400/80 to-teal-600/80',
            link: 'https://tailwindcss.com',
            logo: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
            )
        }
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
                        <div className="relative w-48 h-64 sm:w-60 sm:h-72 mx-auto mb-4 [perspective:1000px]">
                            <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode
                                ? 'from-blue-400 to-blue-600 opacity-50'
                                : 'from-blue-600 to-blue-800 opacity-70'
                                } rounded-2xl hidden md:block md:animate-spin-slow blur-md`} />
                            <div className="relative rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-xl">
                                <Image
                                    src="/images/profile.png"
                                    alt="Erdem Karakaş"
                                    width={240}
                                    height={320}
                                    className="rounded-2xl object-cover w-full h-full"
                                    sizes="(max-width: 768px) 192px, (max-width: 1200px) 240px, 320px"
                                    quality={90}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated background shapes - Hidden on mobile */}
                    <div className="absolute inset-0 hidden md:block">
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
                            <motion.a
                                key={tech.name}
                                href={tech.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.05 }}
                                whileTap={{ y: 0, scale: 0.95 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode
                                    ? 'from-blue-500/30 to-blue-700/30'
                                    : 'from-blue-600/40 to-blue-800/40'
                                    } rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300`} />
                                <div className={`relative px-6 py-3 rounded-lg bg-gradient-to-r ${isDarkMode ? tech.color : tech.color.replace('/80', '')} 
                                    text-white font-medium shadow-lg backdrop-blur-sm flex items-center gap-2`}>
                                    {tech.logo}
                                    {tech.name}
                                </div>
                            </motion.a>
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