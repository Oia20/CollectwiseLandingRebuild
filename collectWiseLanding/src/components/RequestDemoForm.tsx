import React, { useState, useEffect } from 'react';

const RequestDemoForm = () => {
    // Reuse the tiles animation logic from Hero
    const [tiles, setTiles] = useState(Array(100).fill({ animation: 'none', delay: 0 }));

    // Copy the useEffect for tile animation from Hero component
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

        setTiles(Array(120).fill({ animation: 'none', delay: 0 }));
        
        const interval = setInterval(() => {
            if (Math.random() > 0.3) {
                animateTile();
            }
        }, 300 + Math.random() * 700);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-white">
            {/* Animated tiles background */}
            <div className="absolute inset-0 z-0">
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 gap-0.5 p-1 bg-transparent">
                    {tiles.map((tile, i) => (
                        <div
                            key={i}
                            className="aspect-square bg-blue-600/40 rounded-md transition-all duration-4000"
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
                    0%, 100% { background-color: rgba(37, 99, 235, 0.4); }
                    50% { background-color: rgba(30, 58, 138, 0.7); }
                }
            `}</style>

            {/* Updated gradient overlay for more depth */}
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-white/95 via-white/70 to-blue-50/40 z-10" />

            {/* Form Container */}
            <div 
                className="relative z-20 container mx-auto px-4 py-16 min-h-screen flex items-center justify-center"
            >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-2xl border border-white/20">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Request a Demo</h1>
                    <p className="text-gray-600 text-center mb-8">Experience the future of debt collection</p>
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Name</label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Debt Volume</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy40MSA4TDEyIDEyLjU5TDE2LjU5IDhMMTggOS40MUwxMiAxNS40MUw2IDkuNDFMNy40MSA4WiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+')] bg-no-repeat bg-right-4 bg-center-y">
                                <option value="">Select volume range...</option>
                                <option value="0-100k">Less than $50k</option>
                                <option value="100k-500k">$50 to $500k</option>
                                <option value="500k-1m">$500k to $2M</option>
                                <option value="1m-5m">$2M to $10M</option>
                                <option value="5m+">Over $10M</option>
                            </select>
                        </div>


                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Collection Needs</label>
                            <textarea
                                placeholder="Tell us about your collection needs or outstanding payments."
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                            />
                        </div>

                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestDemoForm;