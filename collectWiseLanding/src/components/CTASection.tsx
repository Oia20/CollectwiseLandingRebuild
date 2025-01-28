import React, { useState, useRef, useEffect } from 'react';

const CTASection = () => {
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
        <div ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white py-12 sm:py-16 md:py-20">
            <div className="absolute inset-x-0 inset-y-8 overflow-hidden">
                <div className="absolute -left-4 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse" />
                <div className="absolute right-1/3 top-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-40" />
                <div className="absolute -right-4 bottom-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-800/10 rounded-full mix-blend-multiply filter blur-lg opacity-50" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            Start collecting your unpaid debts now
                        </h2>
                        <button className="group relative bg-blue-900 hover:bg-blue-800 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(30,58,138,0.4)] transform hover:scale-[1.03] active:scale-[0.98]">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative inline-flex items-center">
                                Request Demo
                                <svg className="ml-2 w-4 h-4 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                icon: "⚡️",
                                heading: "Highest Success Rate",
                                description: "Proven strategies, intelligent AI, and data-driven interactions"
                            },
                            {
                                icon: "💰",
                                heading: "Lowest Costs",
                                description: "Efficient collection systems leveraging automation and AI"
                            },
                            {
                                icon: "🤝",
                                heading: "Brand-friendly Messaging",
                                description: "Maintain kind and professional communication with your debtors"
                            }
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className={`transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            >
                                <div className="group relative bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:bg-white transition-all duration-300 border border-gray-200/50 hover:border-gray-300/50 hover:shadow-lg">
                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {item.heading}
                                            </h3>
                                            <p className="text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes subtle-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
            `}</style>
        </div>
    );
};

export default CTASection;