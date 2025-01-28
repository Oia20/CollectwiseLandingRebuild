import React, { useState, useEffect } from 'react';

const CollectionProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progressPercent, setProgressPercent] = useState(0);

    const steps = [
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3V4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4H16V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3V4H10V3C10 2.73478 9.89464 2.48043 9.70711 2.29289C9.51957 2.10536 9.26522 2 9 2Z" fill="url(#paint0_linear)" />
                    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" fill="url(#paint1_linear)" />
                    <path d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5ZM9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z" fill="url(#paint2_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="4" y1="11" x2="20" y2="11" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="8" y1="13" x2="16" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#60A5FA" />
                            <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="9.5" y1="12" x2="14.5" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2563EB" />
                            <stop offset="1" stopColor="#1D4ED8" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "AI Analysis",
            description: "Our AI analyzes debtor data and payment history to determine optimal collection strategies",
            details: [
                "Machine learning models analyze payment patterns",
                "Risk assessment and propensity scoring",
                "Automated strategy optimization"
            ]
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Smart Communication",
            description: "Automated outreach through the most effective channels at the perfect time",
            details: [
                "Multi-channel communication orchestration",
                "AI-powered timing optimization",
                "Personalized message content"
            ]
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 13C15.71 13 15.38 13.07 15.03 13.18C16.19 14.16 17 15.4 17 17V20H23V17C23 14.82 18.83 13 16 13Z" fill="url(#paint0_linear)" />
                    <path d="M8 13C5.17 13 1 14.82 1 17V20H15V17C15 14.82 10.83 13 8 13Z" fill="url(#paint1_linear)" />
                    <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="url(#paint2_linear)" />
                    <path d="M16 12C18.2091 12 20 10.2091 20 8C20 5.79086 18.2091 4 16 4C13.7909 4 12 5.79086 12 8C12 10.2091 13.7909 12 16 12Z" fill="url(#paint3_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="15.03" y1="16.5" x2="23" y2="16.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="1" y1="16.5" x2="15" y2="16.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="4" y1="8" x2="12" y2="8" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="12" y1="8" x2="20" y2="8" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Payment Resolution",
            description: "Flexible payment plans and settlement options to maximize recovery",
            details: [
                "Dynamic payment plan generation",
                "Real-time settlement calculations",
                "Automated payment processing"
            ]
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "Performance Analytics",
            description: "Track collection progress and success rates through our dashboard",
            details: [
                "Real-time recovery tracking",
                "Performance analytics dashboard",
                "ROI measurement and reporting"
            ]
        }
    ];

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgressPercent(prev => {
                if (prev >= 100) {
                    setActiveStep((current) => (current + 1) % steps.length);
                    return 0;
                }
                return prev + 1;
            });
        }, 80);


        return () => clearInterval(progressInterval);
    }, []);

    const getProgressHeight = () => {
        const stepHeight = 100 / (steps.length - 1);
        const currentStepProgress = (progressPercent / 100) * stepHeight;
        const baseHeight = activeStep * stepHeight;
        return Math.min(baseHeight + currentStepProgress, 100);


    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white py-12 sm:py-16">
            <div className="absolute inset-x-0 inset-y-8 overflow-hidden">
                <div className="absolute -left-4 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse-slow" />
                <div className="absolute right-1/3 top-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-pulse-slower" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Collection Process
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Intelligent automation for maximum recovery
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    <div className="w-full lg:w-1/3 relative">
                        <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-200 hidden lg:block">
                            <div 
                                className="absolute top-0 w-px bg-blue-600 transition-all duration-300"
                                style={{ 
                                    height: `${getProgressHeight()}%`,
                                    boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)'
                                }}
                            />
                        </div>
                        
                        <div className="space-y-3">
                            {steps.map((step, index) => (
                                <button
                                    key={index}
                                    className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 relative ${
                                        activeStep === index 
                                            ? 'bg-white shadow-lg border border-gray-200/50' 
                                            : 'hover:bg-white/50'
                                    }`}
                                    onClick={() => {
                                        setActiveStep(index);
                                        setProgressPercent(0);
                                    }}
                                >
                                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 z-10 hidden lg:flex ${
                                        index <= activeStep || (index === activeStep + 1 && progressPercent === 100)
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-white text-gray-400 border-2 border-gray-200'
                                    }`}>
                                        {index + 1}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className={`text-xl sm:text-2xl transition-all duration-300 ${
                                            activeStep === index 
                                                ? 'scale-110 transform-gpu' 
                                                : ''
                                        }`}>
                                            {step.icon}
                                        </span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{step.title}</h3>
                                            <p className="text-sm text-gray-600 max-w-[90%] lg:block hidden">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 relative min-h-[350px] sm:min-h-[400px] lg:min-h-[300px] bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 p-5 sm:p-6 md:p-8 transition-all duration-700 ${
                                    activeStep === index
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-full'
                                }`}
                                style={{ 
                                    zIndex: activeStep === index ? 1 : 0,
                                    pointerEvents: activeStep === index ? 'auto' : 'none'
                                }}
                            >
                                <div className="h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-3xl sm:text-4xl transform transition-all duration-300 group-hover:scale-110">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                                            {step.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                                        {step.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="bg-gray-50/50 rounded-xl p-4">
                                            <ul className="space-y-3">
                                                {step.details.map((detail, i) => (
                                                    <li 
                                                        key={i} 
                                                        className="flex items-start gap-3 transform transition-all duration-300"
                                                        style={{
                                                            transitionDelay: `${i * 200}ms`,
                                                            opacity: activeStep === index ? 1 : 0,
                                                            transform: activeStep === index ? 'translateX(0)' : 'translateX(20px)'
                                                        }}
                                                    >
                                                        <svg 
                                                            className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" 
                                                            fill="none" 
                                                            stroke="currentColor" 
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path 
                                                                strokeLinecap="round" 
                                                                strokeLinejoin="round" 
                                                                strokeWidth={2} 
                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                                            />
                                                        </svg>
                                                        <span className="text-sm text-gray-700 leading-relaxed">
                                                            {detail}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(1.05); }
                }
                
                @keyframes pulse-slower {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.2; transform: scale(1.1); }
                }

                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }

                .animate-pulse-slower {
                    animation: pulse-slower 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default CollectionProcess;