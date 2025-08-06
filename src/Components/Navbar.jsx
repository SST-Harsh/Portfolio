import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
const Navbar = forwardRef(({ scrollToConnect }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth()
    const navigate = useNavigate()

    return (
        <nav ref={ref} className="w-full md:max-w-5xl  mx-auto md:rounded-2xl  text-white bg-white/10 backdrop-blur-3xl px-10  py-2 md:px-9 md:py-6 border border-white/20">
            <div className="flex justify-between  items-center">
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
                    {!isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/login">
                                    <button
                                        className="p-1 border py-2 px-4 rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity" >
                                        Login </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                    <button
                                        className="p-1 border py-2 px-4  rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity">
                                        Signup
                                    </button>
                                </Link>
                            </li>
                        </>

                    ) : (
                        <>
                            <li>
                                <button
                                    onClick={() => { logout(); navigate('/login'); }}
                                    className="p-1 border py-2 px-4  rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity">
                                    Logout
                                </button>
                            </li>
                        </>
                    )

                    }
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
                <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-3 mb-3 space-y-3 border border-white/20">
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
                    {!isLoggedIn ? (<>
                        <div
                            className="flex flex-col gap-2 "
                        >
                            <Link to="/login">
                                <button
                                    className="p-1  w-full border px-2 py-2  md:py-2 md:px-4 rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity" >
                                    Login </button>
                            </Link>
                            <Link to="/register">
                                <button
                                    className="p-1 w-full  border py-2 px-4  rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity">
                                    Signup
                                </button>
                            </Link>
                        </div>

                    </>) : (
                        <button
                            onClick={() => {
                                logout();
                                navigate('/login');
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                        >
                            Logout
                        </button>
                    )}

                </div>
            )}
        </nav>
    );
})
export default Navbar