import { useState } from 'react';
import { motion } from 'framer-motion';
import useThemeStore from '../store/useThemeStore';

const ContactForm = () => {
    const { isDarkMode } = useThemeStore();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Here you would typically send the form data to your backend
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className={`mt-8 space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${isDarkMode
                        ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500'
                        : 'bg-white border-gray-300 focus:border-blue-600'
                        } focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors`}
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${isDarkMode
                        ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500'
                        : 'bg-white border-gray-300 focus:border-blue-600'
                        } focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors`}
                    placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${isDarkMode
                        ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500'
                        : 'bg-white border-gray-300 focus:border-blue-600'
                        } focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors`}
                    placeholder="Your message..."
                />
            </div>

            <div>
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-all transform hover:-translate-y-0.5 ${status === 'sending'
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {status === 'sending' ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </div>

            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-center"
                >
                    Message sent successfully!
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-center"
                >
                    Failed to send message. Please try again.
                </motion.div>
            )}
        </motion.form>
    );
};

export default ContactForm; 