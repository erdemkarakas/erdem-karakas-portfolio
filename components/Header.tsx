import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import useThemeStore from '@/store/useThemeStore';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode } = useThemeStore();

    const menuItems = [
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Education', href: '/#education' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Photography', href: '/#photography' },
        { name: 'Contact', href: '/#contact' },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth' });
        if (isOpen) setIsOpen(false);
    };

    return (
        <header className={`fixed w-full backdrop-blur-md z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'
            }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center"
                    >
                        <Link
                            href="/"
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                        >
                            EK
                        </Link>
                    </motion.div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center">
                        <nav className="flex items-center mr-8">
                            <ul className="flex items-center gap-6">
                                {menuItems.slice(0, -1).map((item) => (
                                    <motion.li
                                        key={item.name}
                                        className="relative"
                                        whileHover="hover"
                                    >
                                        <motion.a
                                            href={item.href}
                                            onClick={(e) => handleClick(e, item.href)}
                                            className={`relative px-2 py-1 ${isDarkMode
                                                ? 'text-gray-300'
                                                : 'text-gray-700'} 
                                                font-medium hover:text-blue-500 transition-colors`}
                                        >
                                            {item.name}
                                            <motion.div
                                                className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-blue-500 origin-left"
                                                initial={{ scaleX: 0 }}
                                                variants={{
                                                    hover: {
                                                        scaleX: 1,
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 400,
                                                            damping: 25
                                                        }
                                                    }
                                                }}
                                            />
                                        </motion.a>
                                    </motion.li>
                                ))}
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <a
                                        href="/#contact"
                                        onClick={(e) => handleClick(e, '/#contact')}
                                        className={`group relative overflow-hidden rounded-xl px-6 py-3 
                                            ${isDarkMode
                                                ? 'bg-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500'
                                                : 'bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400'} 
                                            text-white transition-all duration-300 ease-out
                                            hover:ring-2 hover:ring-blue-500 hover:ring-offset-2
                                            ${isDarkMode ? 'hover:ring-offset-gray-900' : 'hover:ring-offset-white'}`}
                                    >

                                        <span className="relative font-medium">Contact</span>
                                    </a>
                                </motion.li>
                            </ul>
                        </nav>
                        <div className={`h-8 w-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} mx-4`} />
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                } hover:text-blue-500`}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode
                                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>
        </header>
    );
};

export default Header; 