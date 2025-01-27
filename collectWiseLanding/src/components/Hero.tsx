import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [tiles, setTiles] = useState(Array(100).fill({ animation: 'none', delay: 0 }));

    useEffect(() => {
        const animateTile = () => {
            const tileIndex = Math.floor(Math.random() * tiles.length);
            const duration = 3 + Math.random() * 3;
            
            setTiles(prevTiles => {
                const newTiles = [...prevTiles];
                newTiles[tileIndex] = {
                    animation: `tile-darken ${duration}s ease-in-out`,
                    delay: 0
                };
                
                setTimeout(() => {
                    setTiles(prevTiles => {
                        const resetTiles = [...prevTiles];
                        resetTiles[tileIndex] = { animation: 'none', delay: 0 };
                        return resetTiles;
                    });
                }, duration * 1000);
                
                return newTiles;
            });
        };

        setTiles(Array(100).fill({ animation: 'none', delay: 0 }));
        
        const interval = setInterval(() => {
            if (Math.random() > 0.3) {
                animateTile();
            }
        }, 300 + Math.random() * 700);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "easeInOut",
                damping: 20,
                stiffness: 100

            }
        }
    };

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "easeInOut",
                damping: 20,
                stiffness: 100

            }
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-white" style={{ '--hover-opacity': '0' } as any}>
            <div className="absolute inset-0 z-0">
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 gap-0.5 p-1 bg-transparent">
                    {tiles.map((tile, i) => (
                        <div
                            key={i}
                            className="aspect-square bg-gray-400/30 rounded-md transition-all duration-4000"
                            style={{
                                animation: tile.animation ? `${tile.animation} ${tile.delay}s` : 'none',
                                willChange: 'opacity'
                            }}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes tile-darken {
                    0%, 100% { background-color: rgba(156, 163, 175, 0.3); }
                    50% { background-color: rgba(17, 24, 39, 0.6); }
                }
            `}</style>

            {/* Gradient overlay (blur the tiles) */}
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-white/95 via-white/50 to-blue-200/95 z-10" />

            <motion.div 
                className="relative z-20 container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="min-h-[60vh] flex flex-col items-center justify-center">
                    <motion.h1 
                        className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-6 max-w-4xl mx-auto leading-tight"
                        variants={itemVariants}
                    >
                        Maximize Collections With AI.
                    </motion.h1>

                    <motion.p 
                        className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed my-6"
                        variants={itemVariants}
                    >
                        Boost recovery rates and cut costs with CollectWise's autonomous AI agents and integrated legal network
                    </motion.p>

                    <motion.button 
                        className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg font-semibold px-4 sm:px-8 py-2 sm:py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ willChange: 'transform' }}
                    >
                        Request a Demo
                    </motion.button>
                </div>

                <motion.div 
                    className="mt-24 sm:mt-20 md:mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto px-4 sm:px-6"
                    variants={containerVariants}
                    key={1}
                >

                    {[
                        {
                            value: "2X",
                            label: "Higher Liquidation Rates",
                            subtext: "Compared to traditional collection methods"
                        },
                        {
                            value: "20",
                            label: "Days Average",
                            subtext: "Standard recovery timeframe"
                        },
                        {
                            value: "50%",
                            label: "Cost Reduction",
                            subtext: "In collection operational expenses"
                        }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="p-4 sm:p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                            variants={statsVariants}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                            style={{ willChange: 'transform' }}
                        >
                            <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                            <div className="text-base sm:text-lg text-gray-700 font-medium">{stat.label}</div>
                            <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">{stat.subtext}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;