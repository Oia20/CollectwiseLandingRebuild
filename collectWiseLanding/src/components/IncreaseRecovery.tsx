import React from 'react';

const IncreaseRecoverySection = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="absolute inset-x-0 inset-y-8 overflow-hidden">
                <div className="absolute -left-4 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-lg opacity-50" />
                <div className="absolute left-1/3 top-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-lg opacity-40" />
                <div className="absolute -right-4 bottom-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-800/10 rounded-full mix-blend-multiply filter blur-lg opacity-50" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-12 items-center">  
                    <div className="relative order-1 lg:order-1 flex justify-center -mb-8 sm:mb-0">  
                        <div className="relative h-[350px] sm:h-[500px] md:h-[600px] w-full max-w-[350px]"> 
                            <div className="absolute left-[10%] lg:left-0 top-0 w-48 sm:w-56 md:w-64 rounded-3xl shadow-2xl transform transition-all duration-700 hover:-translate-y-2 hover:rotate-1 -rotate-2">  
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-[2rem] blur-lg opacity-60" />
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PvtUpLoRnXU8pDlusvKRQhLk4g75oPafNSJMT" 
                                    alt="Pay in full graphic"
                                    className="relative w-full h-auto rounded-[1.8rem] bg-white shadow-[0_0_15px_rgba(30,58,138,0.2)]" 
                                />
                            </div>

                            <div className="absolute left-[35%] lg:left-32 top-12 sm:top-16 md:top-20 w-48 sm:w-56 md:w-64 rounded-3xl shadow-2xl transform transition-all duration-700 hover:-translate-y-2 hover:-rotate-1 rotate-2"> 
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-900/20 rounded-[2rem] blur-lg opacity-60" />
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PZ1bNYmnBNPg1EM9hwyGeHTjCsK05D78xrocq" 
                                    alt="Payment summary graphic"
                                    className="relative w-full h-auto rounded-3xl border-8 border-white bg-white shadow-[0_0_15px_rgba(30,58,138,0.2)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-12 order-2 lg:order-2 text-center lg:text-left pt-0 sm:pt-4"> 
                        <div className="relative mb-6">
                            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                <span className="relative inline-block">
                                    Increase
                                    <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-full transform origin-left transition-all duration-500 hover:scale-x-110 hover:h-2" />
                                </span>
                                <span>
                                    {" Recovery Rates"}
                                </span>
                            </h2>
                        </div>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            Maximize your collection success rates and increase your profits with our data-driven AI system. We know exactly how to contact your debtors, what channels to target, and when to escalate while still being respectful.
                        </p>

                        <button className="group relative bg-blue-900 hover:bg-blue-800 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(30,58,138,0.4)] transform hover:scale-[1.03] active:scale-[0.98] overflow-hidden" onClick={() => {
                            window.location.href = '/requestdemo';
                        }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative inline-flex items-center">
                                Request Demo Today
                                <svg className="ml-2 w-4 h-4 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncreaseRecoverySection;