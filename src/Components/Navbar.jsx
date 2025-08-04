import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full md:max-w-5xl mx-auto rounded-2xl  text-white bg-white/10 backdrop-blur-3xl md:px-9 md:py-6 border border-white/20">
            <div className="flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="flex items-center">
                    <a href="#" className="text-xl font-bold hover:text-indigo-300 transition-colors">
                        Harsh
                    </a>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center space-x-8">
                    <li>
                        <a 
                            href="#home"
                            className="hover:text-indigo-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#about"
                            className="hover:text-indigo-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projects"
                            className="hover:text-indigo-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact"
                            className="hover:text-indigo-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <FontAwesomeIcon
                            icon={isMenuOpen ? faXmark : faBars}
                            className="h-6 w-6 text-white transition-transform duration-200"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 space-y-3 border border-white/20">
                    <a
                        href="#home"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}