import React, { useState, useRef, useEffect } from 'react';

const DecreaseCollectionCosts = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white py-12">
            <div className="absolute inset-x-0 inset-y-8 overflow-hidden">
                <div className="absolute -left-4 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse transform transition-transform duration-1000 hover:translate-y-1" />
                <div className="absolute right-1/3 top-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-40 transform transition-transform duration-1000 hover:-translate-y-1" />
                <div className="absolute -right-4 bottom-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-800/10 rounded-full mix-blend-multiply filter blur-lg opacity-50 transform transition-transform duration-1000 hover:translate-y-1" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-12 items-center">
                    <div className="lg:pr-12 order-2 lg:order-1 text-center lg:text-left pt-0 sm:pt-4">
                        <div className="relative mb-6">
                            <h2 className={`relative text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <span className="relative inline-block">
                                    Decrease
                                    <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-full transform origin-left transition-all duration-500 hover:scale-x-110 hover:h-2" />
                                </span>
                                <span className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    {" Collection Costs"}
                                </span>
                            </h2>
                        </div>
                        
                        <p className={`text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            Avoid paying high contingency fees to outsourced collection agencies or hiring an expensive in-house collections team. CollectWise's fully autonomous AI agents allow us to reduce costs and offer much lower, more transparent rates.
                        </p>
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center sm:mb-0">
                        <div className="relative h-[350px] sm:h-[500px] md:h-[600px] w-full max-w-[450px]">
                            <div className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 top-1/2 -translate-y-1/2 w-full rounded-3xl shadow-2xl transform transition-all duration-700 rotate-1 hover:-rotate-1 ">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-[2rem] blur-lg opacity-60" />
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PpUwCS37WQoretdkJq38inmZKgf4aA0OLsvBV" 
                                    alt="Cost comparison graph"
                                    className="relative w-full h-auto rounded-[1.8rem] bg-white shadow-[0_0_15px_rgba(30,58,138,0.2)]"
                                />
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-900/10 rounded-full blur-md animate-pulse" />
                                <div className="absolute -left-2 -top-2 w-16 h-16 bg-blue-800/10 rounded-full blur-md animate-pulse-delayed" />
                            </div>

                            <div className="absolute -left-8 top-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-blue-900/20 rounded-xl rotate-12 opacity-20 animate-float" />
                            <div className="absolute right-0 bottom-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-blue-800/20 rounded-full opacity-20 animate-float-delayed" />
                            <div className="absolute left-1/4 bottom-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-blue-700/20 rounded-lg rotate-45 opacity-20 animate-float" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(12deg); }
                    50% { transform: translateY(-10px) rotate(12deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.3; }
                }
                @keyframes pulse-delayed {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.2; }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out infinite;
                }
                .animate-pulse {
                    animation: pulse 4s ease-in-out infinite;
                }
                .animate-pulse-delayed {
                    animation: pulse-delayed 5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default DecreaseCollectionCosts;