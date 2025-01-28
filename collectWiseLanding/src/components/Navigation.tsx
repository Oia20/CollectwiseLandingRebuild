import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
    currentPath: string;
}

const Navigation = ({ currentPath }: NavigationProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isRequestDemoPage = currentPath === '/requestdemo';

    return (
        <nav className="relative z-50 bg-white/95 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20 py-4">
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img 
                                src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PKnuv7pLwFCltpuzgUqMoVRaTJex0Ldjr5BN1" 
                                alt="CollectWise Logo" 
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>


                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick={() => window.location.href = 'https://app.collectwise.com/login'} className="text-gray-700 hover:text-gray-900 px-6 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 font-semibold">
                            Login
                        </button>
                        {!isRequestDemoPage && (
                            <button onClick={() => window.location.href = '/requestdemo'} className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md font-semibold">
                                Request Demo
                            </button>
                        )}
                    </div>



                    <button 
                        className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black block mb-1.5 origin-center"
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: "1.5rem" }}
                            className="w-6 h-0.5 bg-black block mb-1.5"
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black block origin-center"
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="z-50 md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg"
                    >
                        <div className="z-50 container mx-auto px-4 py-6 space-y-4">
                            <button onClick={() => window.location.href = 'https://app.collectwise.com/login'} className="w-full text-gray-700 hover:text-gray-900 px-6 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 font-semibold">
                                Login
                            </button>
                            {!isRequestDemoPage && (
                                <button onClick={() => window.location.href = '/requestdemo'} className="w-full bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md font-semibold">
                                    Request Demo
                                </button>
                            )}
                        </div>
                    </motion.div>

                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation; 