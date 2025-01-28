const TrustedBySlider = () => {
    const companies = [
        { logo: 'https://framerusercontent.com/images/c4idpTk1uQHGoG6nc8Zllt1ceug.png?scale-down-to=512' },
        { logo: 'https://framerusercontent.com/images/qB18UDggPyeUFQZcAyPAR2ZIRaU.png' },
        { logo: 'https://framerusercontent.com/images/fmoFgH7ouQEqJeLwSDRM55Z5W0.svg' },
        { logo: 'https://framerusercontent.com/images/DaUF4kHfOhFO6Sp2yJGpcopeY.png?scale-down-to=512' },
        { logo: 'https://framerusercontent.com/images/As1hiyWbtosWXSiqqftJ4WslLXg.svg?scale-down-to=512' },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-white pb-16">
            <div className="relative z-10 max-w-[90%] mx-auto animate-fadeIn">
                <h2 className="text-center text-gray-600 text-2xl mb-12 font-medium animate-slideUp">
                    Trusted by <span className="text-blue-900">industry leaders</span>
                </h2>
                <div className="slider-container">
                    <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
                    <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10"></div>
                    
                    <div className="slide-track">
                        {[...companies, ...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[200px] mx-3 sm:mx-6 md:mx-12 hover:scale-105 transition-transform duration-300"
                            >
                                <img 
                                    src={company.logo} 
                                    alt="Company logo" 
                                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.7s ease-out forwards;
                }

                .animate-slideUp {
                    animation: slideUp 0.7s ease-out forwards;
                }

                .slider-container {
                    overflow: hidden;
                    padding: 20px 0;
                    position: relative;
                    margin: 0 40px;
                }

                .slide-track {
                    display: flex;
                    animation: scroll 40s linear infinite;
                    width: fit-content;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }

                .slide-track:hover {
                    animation-play-state: paused;
                }

                img {
                    transition: all 0.3s ease-in-out;
                    will-change: transform, opacity, filter;
                }
                `}
            </style>
        </div>
    );
};

export default TrustedBySlider;