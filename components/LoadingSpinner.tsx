import { motion } from 'framer-motion';
import useThemeStore from '@/store/useThemeStore';

const LoadingSpinner = () => {
    const { isDarkMode } = useThemeStore();

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
            <motion.div
                className={`flex flex-col items-center p-8 rounded-lg ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
                    }`}
            >
                <motion.div
                    className="w-16 h-16 border-4 rounded-full"
                    style={{
                        borderColor: isDarkMode ? '#3B82F6 transparent #3B82F6 transparent' : '#2563EB transparent #2563EB transparent',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.p
                    className={`mt-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Loading...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LoadingSpinner; 