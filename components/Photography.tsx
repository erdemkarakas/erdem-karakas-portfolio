import { motion } from "framer-motion";
import Image from "next/image";
import useThemeStore from "../store/useThemeStore";

export default function Photography() {
    const { isDarkMode } = useThemeStore();

    const photos = [
        {
            src: "/images/photo1.jpg",
            alt: "Personal Photography 1",
            description: "A moment captured in time",
        },
        {
            src: "/images/photo2.jpg",
            alt: "Personal Photography 2",
            description: "Through my lens",
        },
        {
            src: "/images/photo3.jpg",
            alt: "Personal Photography 3",
            description: "Life in frames",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section className={`py-20 relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="photography">
            {/* Dotted background pattern - Hidden on mobile */}
            <div className={`absolute inset-0 hidden md:block ${isDarkMode
                ? 'bg-[radial-gradient(circle,_#0369a1_2px,_transparent_2px)] opacity-[0.15]'
                : 'bg-[radial-gradient(circle,_#1e40af_2px,_#f8fafc_2px)] opacity-[0.4]'
                } bg-[length:24px_24px]`} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Photography
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        Capturing life's beautiful moments through my lens. Here are some of my favorite shots taken with my phone.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative h-[400px] md:h-[500px]"
                        >
                            <div className={`relative h-full w-full rounded-xl overflow-hidden shadow-xl ${isDarkMode ? 'shadow-blue-500/10' : 'shadow-blue-600/20'}`}>
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
                                    quality={85}
                                    priority={index === 0}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode
                                    ? 'from-black/70 via-black/40 to-transparent'
                                    : 'from-black/60 via-black/30 to-transparent'
                                    } transition-opacity duration-300 opacity-0 md:group-hover:opacity-100`}>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <p className="text-lg font-medium">{photo.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 