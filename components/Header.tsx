import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import useThemeStore from '../store/useThemeStore';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode } = useThemeStore();

    const menuItems = [
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
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
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className={`transition-colors cursor-pointer ${isDarkMode
                                        ? 'text-gray-300 hover:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </motion.div>
                        ))}
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