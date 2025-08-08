import { lazy } from "react";
import { forwardRef } from "react";
import harsh from "../assets/harsh.jpg";
import { useTheme } from "../Context/ThemeProvider";

const About = forwardRef((props, ref) => {
  const { theme } = useTheme();

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
    },
  };

  const styles = {
    container: themeStyles.container[theme] || themeStyles.container.default,
    card: themeStyles.card[theme] || themeStyles.card.default,
    text: themeStyles.text[theme] || themeStyles.text.default,
    link: themeStyles.link[theme] || themeStyles.link.default,
    secondaryText: themeStyles.secondaryText[theme] || themeStyles.secondaryText.default,
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`w-full py-20 transition-colors duration-300 ${styles.container}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${styles.text}`}>
              About <span className={`${styles.link}`}>Me</span>
            </h1>
            <div className="space-y-4">
              <p className={`text-lg leading-relaxed ${styles.secondaryText}`}>
                I'm Harsh, a passionate full-stack developer specializing in modern web technologies. With expertise in the MERN stack, I build interactive, responsive, and scalable web applications.
              </p>
              <p className={`text-lg leading-relaxed ${styles.secondaryText}`}>
                My development philosophy centers around clean code, intuitive UX, and performance optimization. I enjoy solving complex problems and turning ideas into functional, beautiful digital experiences.
              </p>
              <p className={`text-lg leading-relaxed ${styles.secondaryText}`}>
                Currently expanding my skills in cloud computing (AWS) and advanced React patterns, while contributing to open-source projects in my spare time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 md:gap-4">
              {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-opacity-80 ${styles.secondaryText} ${styles.card}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="md:w-1/2 flex justify-center">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-xl ${styles.card}`}>
              <div className="w-full h-full flex items-center justify-center text-indigo-400">
                <img
                  loading="lazy"
                  onLoad={lazy}
                  src={harsh}
                  className="object-cover w-full h-full"
                  alt="Harsh"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
