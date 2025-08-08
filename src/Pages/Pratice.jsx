import Navbar from "../Components/Navbar";
import { useTheme } from "../Context/ThemeProvider";
import p1 from "../assets/p1.png";

export default function Practice() {
  const { theme } = useTheme();

  // Theme-based styles
  const themeStyles = {
    container: {
      light: "bg-gray-50 text-gray-800",
      dark: "bg-gray-900 text-gray-100",
      purple: "bg-purple-50 text-purple-900",
      coffee: "bg-amber-50 text-amber-900",
      default: "bg-gray-50 text-gray-800",
    },
    card: {
      light: "bg-white border border-gray-200",
      dark: "bg-gray-800 border border-gray-700",
      purple: "bg-purple-100 border border-purple-200",
      coffee: "bg-amber-100 border border-amber-200",
      default: "bg-white border border-gray-200",
    },
    text: {
      light: "text-gray-600",
      dark: "text-gray-300",
      purple: "text-purple-700",
      coffee: "text-amber-700",
      default: "text-gray-600",
    },
    link: {
      light: "text-indigo-600 hover:text-indigo-800",
      dark: "text-indigo-400 hover:text-indigo-300",
      purple: "text-purple-600 hover:text-purple-800",
      coffee: "text-amber-600 hover:text-amber-800",
      default: "text-indigo-600 hover:text-indigo-800",
    },
    secondaryText: {
      light: "text-gray-500",
      dark: "text-gray-400",
      purple: "text-purple-500",
      coffee: "text-amber-600",
      default: "text-gray-500",
    }
  };

  const styles = {
    container: themeStyles.container[theme] || themeStyles.container.default,
    card: themeStyles.card[theme] || themeStyles.card.default,
    text: themeStyles.text[theme] || themeStyles.text.default,
    link: themeStyles.link[theme] || themeStyles.link.default,
    secondaryText: themeStyles.secondaryText[theme] || themeStyles.secondaryText.default,
  };

  return (
    <div className={`w-full min-h-screen ${styles.container}`}>
      <Navbar />

      {/* Card Container */}
      <div className={`rounded-xl max-w-4xl mx-auto mt-20 md:mt-32 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${styles.card}`}>
        {/* Image Section */}
        <div className="h-48 overflow-hidden">
          <img
            src={p1}
            alt="EventScape Project"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 ${styles.text}`}>
            EventScape
          </h3>

          <p className={`mb-4 ${styles.secondaryText}`}>
            Full-featured online event management system with payments and admin dashboard
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["HTML", "CSS", "JavaScript", "MySQL", "SpringBoot"].map(tag => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-medium rounded-full border bg-opacity-80 ${styles.secondaryText} ${styles.card}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between">
            <a
              href="#"
              className={`font-medium ${styles.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
            <a
              href="#"
              className={`font-medium ${styles.secondaryText} hover:underline`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
