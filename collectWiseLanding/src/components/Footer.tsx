import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Dividing line above footer */}
            <div className="w-full border-t border-gray-200" />
            
            <footer className="relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <img 
                                src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PKnuv7pLwFCltpuzgUqMoVRaTJex0Ldjr5BN1" 
                                alt="CollectWise Logo" 
                                className="h-8 w-auto mt-2"
                            />
                        </div>

                        {/* Middle: LinkedIn and Badges */}
                        <div className="flex justify-between items-center">
                            <div>
                                <a 
                                    href="https://www.linkedin.com/company/trycollectwise/"
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                    aria-label="LinkedIn"
                                >

                                    <svg 
                                        className="h-6 w-6" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Right: Compliance Badges */}
                            <div className="flex space-x-8">
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PuB5VZCvXIC2kTyiXdLE8DW5n3Bbave70hP4s" 
                                    alt="HIPAA Compliant" 
                                    className="h-16 w-auto"
                                />
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PKWdclnwFCltpuzgUqMoVRaTJex0Ldjr5BN13" 
                                    alt="AICPA SOC Compliant" 
                                    className="h-16 w-auto"
                                />
                            </div>
                        </div>

                        {/* Bottom: Copyright */}
                        <div className="flex justify-center">
                            <p className="text-gray-600 text-sm mb-2">
                                © {new Date().getFullYear()} CollectWise. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;