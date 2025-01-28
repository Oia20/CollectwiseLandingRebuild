const IncreaseRecoverySection = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-4 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse" />
                <div className="absolute left-1/3 top-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-40" />
                <div className="absolute -right-4 bottom-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-800/10 rounded-full mix-blend-multiply filter blur-lg opacity-50" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-16 items-center">  
                    <div className="relative order-1 flex justify-center lg:justify-start -mb-8 sm:mb-0">  
                        <div className="relative h-[350px] sm:h-[500px] md:h-[600px] w-full max-w-[350px] lg:max-w-none"> 
                            <div className="absolute left-[10%] lg:left-0 top-0 w-48 sm:w-56 md:w-64 rounded-3xl shadow-2xl transform transition-all duration-700 hover:-translate-y-2 hover:rotate-1 -rotate-2">  
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-[2rem] blur-lg opacity-60" />
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PvtUpLoRnXU8pDlusvKRQhLk4g75oPafNSJMT" 
                                    alt="CollectWise Mobile App"
                                    className="relative w-full h-auto rounded-3xl bg-white shadow-[0_0_15px_rgba(30,58,138,0.2)]" 
                                />
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-900/10 rounded-full blur-md animate-pulse" />
                                <div className="absolute -left-2 -top-2 w-16 h-16 bg-blue-800/10 rounded-full blur-md animate-pulse-delayed" />
                            </div>

                            <div className="absolute left-[35%] lg:left-32 top-12 sm:top-16 md:top-20 w-48 sm:w-56 md:w-64 rounded-3xl shadow-2xl transform transition-all duration-700 hover:-translate-y-2 hover:-rotate-1 rotate-2"> 
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-900/20 rounded-[2rem] blur-lg opacity-60" />
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PZ1bNYmnBNPg1EM9hwyGeHTjCsK05D78xrocq" 
                                    alt="CollectWise Dashboard"
                                    className="relative w-full h-auto rounded-3xl border-8 border-white bg-white shadow-[0_0_15px_rgba(30,58,138,0.2)]"
                                />
                                <div className="absolute -right-2 -top-2 w-20 h-20 bg-blue-900/10 rounded-full blur-md animate-pulse-delayed" />
                                <div className="absolute -left-4 -bottom-4 w-28 h-28 bg-blue-800/10 rounded-full blur-md animate-pulse" />
                            </div>

                            <div className="absolute -left-8 top-1/2 w-12 sm:w-16 h-12 sm:h-16 bg-blue-900/20 rounded-xl rotate-12 opacity-20 animate-float" />
                            <div className="absolute right-0 bottom-1/3 w-16 sm:w-20 h-16 sm:h-20 bg-blue-800/20 rounded-full opacity-20 animate-float-delayed" />
                            <div className="absolute left-1/4 bottom-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-blue-700/20 rounded-lg rotate-45 opacity-20 animate-float" />
                        </div>
                    </div>

                    <div className="lg:pl-12 order-2 text-center lg:text-left pt-0 sm:pt-4"> 
                        <div className="relative mb-6">
                            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                <span className="relative inline-block">
                                    Increase
                                    <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-full transform origin-left transition-all duration-300 hover:scale-x-110" />
                                </span>
                                {" Recovery Rates"}
                            </h2>
                        </div>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            Maximize your collection success rates and increase your profits with our data-driven AI system. We know exactly how to contact your debtors, what channels to target, and when to escalate while still being respectful.
                        </p>

                        <button className="group relative bg-blue-900 hover:bg-blue-800 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-sm transition-all duration-200 hover:shadow-[0_0_15px_rgba(30,58,138,0.3)] transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative inline-flex items-center">
                                Request Demo Today
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
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

export default IncreaseRecoverySection;