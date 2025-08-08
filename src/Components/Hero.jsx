import { forwardRef } from 'react';
import TextType from '../Utils/TextType';
import harshCv from '../assets/harshCv.pdf';
import { useTheme } from '../Context/ThemeProvider';

const Hero = forwardRef(({ scrollToConnect }, ref) => {
  const { theme } = useTheme();

  const themeStyles = {
    container: {
      light: "bg-gray-50 text-gray-800",
      dark: "bg-gray-900 text-gray-100",
      purple: "bg-purple-50 text-purple-900",
      coffee: "bg-amber-50 text-amber-900",
      default: "bg-gray-50 text-gray-800",
    },
    text: {
      light: "text-gray-700",
      dark: "text-gray-100",
      purple: "text-purple-800",
      coffee: "text-amber-800",
      default: "text-gray-700",
    },
    secondaryText: {
      light: "text-gray-500",
      dark: "text-gray-400",
      purple: "text-purple-600",
      coffee: "text-amber-600",
      default: "text-gray-500",
    },
    link: {
      light: "text-indigo-600 hover:text-indigo-800",
      dark: "text-indigo-400 hover:text-indigo-300",
      purple: "text-purple-600 hover:text-purple-800",
      coffee: "text-amber-600 hover:text-amber-800",
      default: "text-indigo-600 hover:text-indigo-800",
    },
    buttonPrimary: {
      light: "bg-indigo-600 hover:bg-indigo-700 text-white",
      dark: "bg-indigo-600 hover:bg-indigo-700 text-white",
      purple: "bg-purple-600 hover:bg-purple-700 text-white",
      coffee: "bg-amber-600 hover:bg-amber-700 text-white",
      default: "bg-indigo-600 hover:bg-indigo-700 text-white",
    },
    buttonSecondary: {
      light: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100 hover:scale-105",
      dark: "border border-indigo-400 text-indigo-400 hover:bg-indigo-900/30 hover:scale-105",
      purple: "border border-purple-600 text-purple-600 hover:bg-purple-100 hover:scale-105",
      coffee: "border border-amber-600 text-amber-600 hover:bg-amber-100 hover:scale-105",
      default: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100 hover:scale-105",
    },

  };

  const styles = {
    container: themeStyles.container[theme] || themeStyles.container.default,
    text: themeStyles.text[theme] || themeStyles.text.default,
    secondaryText: themeStyles.secondaryText[theme] || themeStyles.secondaryText.default,
    link: themeStyles.link[theme] || themeStyles.link.default,
    buttonPrimary: themeStyles.buttonPrimary[theme] || themeStyles.buttonPrimary.default,
    buttonSecondary: themeStyles.buttonSecondary[theme] || themeStyles.buttonSecondary.default,
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`w-full h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300`}
    >
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${styles.text}`}>
            Hello
            <span className={`ml-4 ${styles.link}`}>
              <TextType
                text={["Developers", "MERN Enthusiast", "Happy coding!"]}
                typingSpeed={75}
                pauseDuration={1600}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>
          </h1>

          <p className={`mt-6 text-lg md:text-xl max-w-2xl leading-relaxed ${styles.secondaryText}`}>
            Welcome to my portfolio. I'm Harsh, a passionate Full Stack Developer specializing in modern web technologies and cloud solutions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={harshCv} download="harshCv" target="_blank" rel="noopener noreferrer">
              <button
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.buttonPrimary}`}
                aria-label="Download Resume"
              >
                Download Resume
              </button>
            </a>

            <button
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.buttonSecondary}`}
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
});

export default Hero;
