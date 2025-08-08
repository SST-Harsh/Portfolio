import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);


const availableTheme = ["light", "dark", "purple", "coffee"];

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    // Load saved theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && availableTheme.includes(savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Method to change theme
    const switchTheme = (newTheme) => {
        if (availableTheme.includes(newTheme)) {
            setTheme(newTheme);
        } else {
            console.warn(`Theme "${newTheme}" is not supported.`);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, switchTheme, availableTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
