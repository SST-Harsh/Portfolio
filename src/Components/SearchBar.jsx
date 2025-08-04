import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
    const [show, setShow] = useState(false);

    return (
        <nav className="w-full md:max-w-5xl  mx-auto rounded-2xl text-white bg-white/10 backdrop-blur-3xl  px-4 py-2">
            <div className="flex justify-between items-center">

                <div className="flex items-center">
                    <h1 className="text-xl font-bold">Harsh</h1>
                </div>

                {/* Right - Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setShow(!show)}
                        className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                    >
                        <FontAwesomeIcon
                            icon={show ? faXmark : faBars}
                            className="h-6 w-6 text-white transition-transform duration-200"
                        />
                    </button>
                </div>
                {/* desktop version */}
                <ul className="hidden md:flex items-center space-x-8">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Projects</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
            </div>

            {/* Mobile Dropdown Menu */}
            {show && (
                <div className="md:hidden mt-2 cursor-pointer bg-white rounded-md shadow-md p-4 text-black space-y-2">
                    <div className="flex hover:text-gray-800  items-center gap-2">

                        <span>Home</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-gray-800">

                        <span>Projects</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-gray-800">

                        <span>About</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-gray-800">

                        <span>Contact us</span>
                    </div>

                </div>
            )}

        </nav>
    );
}