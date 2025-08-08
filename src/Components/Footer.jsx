import { useTheme } from '../Context/ThemeProvider';

export default function Footer() {
  const { theme } = useTheme();

  const themeStyles = {
    container: {
      light: "bg-gray-100 text-gray-700",
      dark: "bg-gray-800 text-gray-300",
      purple: "bg-purple-100 text-purple-800",
      coffee: "bg-amber-100 text-amber-800",
      default: "bg-gray-100 text-gray-700",
    },
  };

  const containerStyle = themeStyles.container[theme] || themeStyles.container.default;

  return (
    <footer
      className={`w-full py-4 text-center text-sm border-t border-gray-300 transition-colors duration-300 ${containerStyle}`}
    >
      © {new Date().getFullYear()} Harsh Pal Singh. All rights reserved.
    </footer>
  );
}
