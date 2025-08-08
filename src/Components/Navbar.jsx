import { useState, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useTheme } from "../Context/ThemeProvider";

const Navbar = forwardRef(({ scrollToConnect }, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const { availableTheme, theme, switchTheme } = useTheme();
  const navigate = useNavigate();

 
  const themeStyles = {
    dark: {
      navBg: "bg-gray-900/50",
      text: "text-white",
      hoverText: "hover:text-indigo-300",
      border: "border-white/20",
      dropdownBg: "bg-gray-800 text-gray-100",
    },
    purple: {
      navBg: "bg-purple-900/50",
      text: "text-purple-100",
      hoverText: "hover:text-purple-300",
      border: "border-purple-200/20",
      dropdownBg: "bg-purple-50 text-purple-900",
    },
    coffee: {
      navBg: "bg-amber-900/50",
      text: "text-amber-100",
      hoverText: "hover:text-amber-300",
      border: "border-amber-200/20",
      dropdownBg: "bg-amber-50 text-amber-900",
    },
    light: {
      navBg: "bg-white/50",
      text: "text-gray-800",
      hoverText: "hover:text-indigo-500",
      border: "border-gray-300/20",
      dropdownBg: "bg-white text-gray-900",
    },
  };

  const current = themeStyles[theme] || themeStyles.light;

  return (
    <nav
      ref={ref}
      className={`w-full   md:max-w-5xl mx-auto md:rounded-2xl backdrop-blur-3xl px-10 py-2 md:px-9 md:py-6 border ${current.border} ${current.navBg} ${current.text}`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className={`text-xl font-bold ${current.hoverText} transition-colors`}
          >
            Harsh
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {["home", "about", "projects", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`${current.hoverText} transition-colors px-3 py-2 rounded-md text-sm font-medium`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}

          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/login">
                  <button className="p-1 border py-2 px-4 rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="p-1 border py-2 px-4 rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity">
                    Signup
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="p-1 border py-2 px-4 rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity"
              >
                Logout
              </button>
            </li>
          )}

          {/* Theme switcher */}
          <li>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="p-1 border py-2 px-4 rounded border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity m-1"
              >
                Themes
              </div>
              <ul
                tabIndex={0}
                className={`dropdown-content menu rounded-box z-10 w-52 p-2 shadow-sm ${current.dropdownBg}`}
              >
                {availableTheme.map((name) => (
                  <li key={name}>
                    <button
                      className={`capitalize ${
                        name === theme ? "font-bold text-blue-500" : ""
                      }`}
                      onClick={() => switchTheme(name)}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link to="/canva">
              <button>Canva</button>
            </Link>
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
              className="h-6 w-6 transition-transform duration-200"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden mt-4 rounded-lg p-3 mb-3 space-y-3 border ${current.border} ${current.navBg}`}
        >
          {["home", "about", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${current.hoverText} transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          {!isLoggedIn ? (
            <div className="flex flex-col gap-2">
              <Link to="/login">
                <button className="p-1 w-full border px-2 py-2 rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="p-1 w-full border py-2 px-4 rounded-full border-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800 hover:cursor-pointer hover:scale-105 duration-200 transition-opacity">
                  Signup
                </button>
              </Link>
            </div>
          ) : (
            <button
              onClick={() => {
                logout();
                navigate("/login");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-red-400 hover:bg-red-500 hover:text-white transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
});

export default Navbar;
