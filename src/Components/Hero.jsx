import { forwardRef } from 'react';
import TextType from '../Utils/TextType';
import harshCv from '../assets/harshCv.pdf'

const Hero=forwardRef(({ scrollToConnect }, ref) => {
   

    return (
        <section id="home" ref={ref} className={`w-full min-h-[90vh] flex items-center justify-center relative overflow-hidden`}>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Hello<span className="ml-4 text-indigo-400">
                            <TextType
                                text={["Developers", "MERN Enthusiast", "Happy coding!"]}
                                typingSpeed={75}
                                pauseDuration={1600}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Welcome to my portfolio. I'm Harsh, a passionate Full Stack Developer specializing in modern web technologies and cloud solutions.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href={harshCv}
                            download='harshCv'
 
                           target='_blank'>
                            <button
                                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                aria-label="Download Resume">
                                Download Resume
                            </button>
                        </a>
                        <button
                            className="px-8 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={scrollToConnect}
                            aria-label="Contact Me"
                        >
                            Contact Me
                        </button>
                    </div>
                     
                </div>
            </div>


        </section>

    );
})
export default Hero