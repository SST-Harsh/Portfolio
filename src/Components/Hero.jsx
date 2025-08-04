import TextType from '../Utils/TextType';

export default function Hero() {
    return (
        <div className="w-full h-screen flex items-center justify-center ">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Hello<span className="ml-4 text-indigo-400">
                            <TextType
                                text={["Developers", "MERN Enthusiast", "Happy coding!"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
                        Welcome to my portfolio. I'm Harsh, a passionate full-stack developer specializing in modern web technologies.
                    </p>
                    
                    <div className="mt-8 flex gap-4">
                        <button
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            onClick={() => {/* Add download handler */}}
                        >
                            Download Resume
                        </button>
                        
                        <button
                            className="px-8 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            onClick={() => {/* Add contact handler */}}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}