import React, { useState, useRef, useEffect } from 'react';

const BrandImageSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="absolute inset-x-0 inset-y-8 overflow-hidden">
                <div className="absolute -left-4 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-green-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse transform transition-transform duration-1000 hover:translate-y-1" />
                <div className="absolute right-1/3 top-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-40 transform transition-transform duration-1000 hover:-translate-y-1" />
                <div className="absolute -right-4 bottom-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-lg opacity-50 transform transition-transform duration-1000 hover:translate-y-1" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-12 items-center">
                    <div className="hidden lg:block relative order-1">
                        <div className="absolute inset-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[500px] bg-gradient-to-b from-blue-600/20 via-purple-500/20 to-teal-500/20 blur-[100px] opacity-50" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-teal-500/20 blur-[100px] opacity-50" />
                        </div>

                        <div className="relative w-[270px] sm:w-[300px] h-[520px] sm:h-[580px] bg-black rounded-[3rem] shadow-[0_0_0_8px_#1a1a1a,0_8px_20px_-3px_rgba(0,0,0,0.3),0_20px_40px_-12px_rgba(0,0,0,0.5)] transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_0_8px_#1a1a1a,0_14px_30px_-3px_rgba(0,0,0,0.3),0_30px_60px_-12px_rgba(0,0,0,0.5)]">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-teal-500/20 rounded-[3rem] blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                            
                            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent" />
                            
                            <div className="absolute top-0 inset-x-0 h-6">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-[100px] bg-black rounded-b-3xl flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    <div className="w-10 h-1.5 bg-gray-800 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                </div>
                            </div>
                            
                            <div className="relative w-full h-full bg-gray-50 rounded-[2.75rem] overflow-hidden shadow-[inset_0_2px_15px_rgba(30,58,138,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none" />

                                <div className="absolute top-0 inset-x-0 h-6 bg-white flex justify-between items-center px-4 text-xs text-gray-800">
                                    <span>9:41</span>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm4-3a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H7a1 1 0 01-1-1V8zm4-3a1 1 0 011-1h2a1 1 0 011 1v11a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z" />
                                        </svg>
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zm-2.829 2.828a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="absolute top-6 w-full bg-gray-50 z-10 px-4 py-2 border-b border-gray-200">
                                    <div className="flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-base font-semibold text-gray-900">CollectWise Support</div>
                                            <div className="text-xs text-green-800">Online</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-24 bottom-0 left-0 right-0 overflow-y-auto px-2 py-2 space-y-2 bg-gray-50/80">
                                    <div className="flex items-start gap-1 animate-fade-in">
                                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                            <p className="text-[15px] text-gray-800">After your most recent payment, the remaining balance should be $108.</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row-reverse items-start gap-1 animate-fade-in">
                                        <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%]">
                                            <p className="text-[15px] text-white">I don't think I can pay the entire balance today.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-1 animate-fade-in">
                                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                            <p className="text-[15px] text-gray-800">No worries! Would you be able to split it up into two monthly payments of $54.00?</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row-reverse items-start gap-1 animate-fade-in">
                                        <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%]">
                                            <p className="text-[15px] text-white">Yes</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-1 animate-fade-in">
                                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                            <div className="text-[15px] text-gray-800">
                                                You can pay through the link provided here: 
                                                <a href="#" className="text-blue-600 hover:underline break-all">
                                                    https://app.collectwise.com/invoicepayments/
                                                </a>
                                                . Let me know if you have any other questions!
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row-reverse items-start gap-1 animate-fade-in">
                                        <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%]">
                                            <p className="text-[15px] text-white">Okay thank you so much! I appreciate your assistance</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-1 animate-fade-in">
                                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                            <p className="text-[15px] text-gray-800">You're welcome, Christina! I'm glad I could help. If you have any more questions, feel free to reach out. Have a good day!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full shadow-sm"></div>
                        </div>
                    </div>

                    <div className="lg:pl-12 order-2 text-center lg:text-left">
                        <div className="relative mb-6 order-first">
                            <h2 className={`relative text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 lg:mb-6 mb-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <span className="relative inline-block">
                                    Maintain a
                                </span>
                                <span className={`block transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    Positive Brand Image
                                </span>
                            </h2>
                        </div>
                        
                        <div className="lg:hidden mb-6">
                            <div className="relative order-1 lg:order-2 flex justify-center sm:mb-0">
                                <div className="absolute inset-0">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[500px] bg-gradient-to-b from-blue-600/20 via-purple-500/20 to-teal-500/20 blur-[100px] opacity-50" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-teal-500/20 blur-[100px] opacity-50" />
                                </div>

                                <div className="relative w-[270px] sm:w-[300px] h-[520px] sm:h-[580px] bg-black rounded-[3rem] shadow-[0_0_0_8px_#1a1a1a,0_8px_20px_-3px_rgba(0,0,0,0.3),0_20px_40px_-12px_rgba(0,0,0,0.5)] transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_0_8px_#1a1a1a,0_14px_30px_-3px_rgba(0,0,0,0.3),0_30px_60px_-12px_rgba(0,0,0,0.5)]">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-teal-500/20 rounded-[3rem] blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                    
                                    <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent" />
                                    
                                    <div className="absolute top-0 inset-x-0 h-6">
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-[100px] bg-black rounded-b-3xl flex items-center justify-center gap-2">
                                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                            <div className="w-10 h-1.5 bg-gray-800 rounded-full"></div>
                                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="relative w-full h-full bg-gray-50 rounded-[2.75rem] overflow-hidden shadow-[inset_0_2px_15px_rgba(30,58,138,0.2)]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none" />

                                        <div className="absolute top-0 inset-x-0 h-6 bg-white flex justify-between items-center px-4 text-xs text-gray-800">
                                            <span>9:41</span>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm4-3a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H7a1 1 0 01-1-1V8zm4-3a1 1 0 011-1h2a1 1 0 011 1v11a1 1 0 01-1 1h-2a1 1 0 01-1-1V5z" />
                                                </svg>
                                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zm-2.829 2.828a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute top-6 w-full bg-gray-50 z-10 px-4 py-2 border-b border-gray-200">
                                            <div className="flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="text-base font-semibold text-gray-900">CollectWise Support</div>
                                                    <div className="text-xs text-green-800">Online</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute top-24 bottom-0 left-0 right-0 overflow-y-auto px-2 py-2 space-y-2 bg-gray-50/80">
                                            {/* Agent Message 1 */}
                                            <div className="flex items-start gap-1 animate-fade-in">
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                                    <p className="text-[15px] text-gray-800">After your most recent payment, the remaining balance should be $108.</p>
                                                </div>
                                            </div>

                                            {/* Customer Message 1 */}
                                            <div className="flex flex-row-reverse items-start gap-1 animate-fade-in">
                                                <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%]">
                                                    <p className="text-[15px] text-white">I don't think I can pay the entire balance today.</p>
                                                </div>
                                            </div>

                                            {/* Agent Message 2 */}
                                            <div className="flex items-start gap-1 animate-fade-in">
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                                    <p className="text-[15px] text-gray-800">No worries! Would you be able to split it up into two monthly payments of $54.00?</p>
                                                </div>
                                            </div>

                                            {/* Customer Message 2 */}
                                            <div className="flex flex-row-reverse items-start gap-1 animate-fade-in">
                                                <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%]">
                                                    <p className="text-[15px] text-white">Yes</p>
                                                </div>
                                            </div>

                                            {/* Agent Message 3 */}
                                            <div className="flex items-start gap-1 animate-fade-in">
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                                    <div className="text-[15px] text-gray-800">
                                                        You can pay through the link provided here: 
                                                        <p className="text-blue-600 hover:underline break-all">
                                                            https://app.collectwise.com/invoicepayments/
                                                        </p>
                                                        Let me know if you have any other questions!
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Customer Message 3 */}
                                            <div className="flex flex-row-reverse items-start gap-1 animate-fade-in">
                                                <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm max-w-[85%]">
                                                    <p className="text-[15px] text-white">Okay thank you so much! I appreciate your assistance</p>
                                                </div>
                                            </div>

                                            {/* Agent Message 4 */}
                                            <div className="flex items-start gap-1 animate-fade-in">
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                                                    <p className="text-[15px] text-gray-800">You're welcome, Christina! I'm glad I could help. If you have any more questions, feel free to reach out. Have a good day!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                        
                        <p className={`text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed mt-8 lg:mt-0 transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            Our communications with your debtors are strictly amicable and respectful, helping you maintain a positive brand image and even encourage future sales.
                        </p>
                        
                        <p className={`text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            Additionally, our system automatically complies with all federal and state-specific regulations, ensuring your reputation stays protected.
                        </p>

                        <div className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium text-gray-600">Regulation Compliant</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-600">Respectful Communication</span>
                            </div>
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

export default BrandImageSection;