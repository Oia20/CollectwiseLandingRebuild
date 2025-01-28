import React, { useState, useEffect } from 'react';

const CollectionProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progressPercent, setProgressPercent] = useState(0);

    const steps = [
        {
            icon: "🤖",
            title: "AI Analysis",
            description: "Our AI analyzes debtor data and payment history to determine optimal collection strategies",
            details: [
                "Machine learning models analyze payment patterns",
                "Risk assessment and propensity scoring",
                "Automated strategy optimization"
            ]
        },
        {
            icon: "💬",
            title: "Smart Communication",
            description: "Automated outreach through the most effective channels at the perfect time",
            details: [
                "Multi-channel communication orchestration",
                "AI-powered timing optimization",
                "Personalized message content"
            ]
        },
        {
            icon: "🤝",
            title: "Payment Resolution",
            description: "Flexible payment plans and settlement options to maximize recovery",
            details: [
                "Dynamic payment plan generation",
                "Real-time settlement calculations",
                "Automated payment processing"
            ]
        },
        {
            icon: "📊",
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