// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust path to your actual source files
  ],
  safelist: [
    {
      pattern: /(bg|text|border|from|to|hover:bg|hover:text)-(lightTheme|darkTheme|purpleTheme|coffeeTheme)-(background|text|card|cardBorder|secondaryText|link|linkHover|gradientFrom|gradientTo)/,
      variants: ['hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        lightTheme: {
          background: "#f4f4f4",
          text: "#111111",
          card: "#ffffff",
          cardBorder: "#e5e5e5",
          secondaryText: "#666666",
          link: "#1e40af",
          linkHover: "#1d4ed8",
          gradientFrom: "#a1c4fd",
          gradientTo: "#c2e9fb",
        },
        darkTheme: {
          background: "#1e1e1e",
          text: "#ffffff",
          card: "#2a2a2a",
          cardBorder: "#444444",
          secondaryText: "#aaaaaa",
          link: "#3b82f6",
          linkHover: "#60a5fa",
          gradientFrom: "#0f2027",
          gradientTo: "#203a43",
        },
        purpleTheme: {
          background: "#f5f3ff",
          text: "#4c1d95",
          card: "#ede9fe",
          cardBorder: "#c4b5fd",
          secondaryText: "#7e22ce",
          link: "#8b5cf6",
          linkHover: "#7c3aed",
          gradientFrom: "#a78bfa",
          gradientTo: "#c084fc",
        },
        coffeeTheme: {
          background: "#f3ebe2",
          text: "#4b3621",
          card: "#d9cfc1",
          cardBorder: "#a89f91",
          secondaryText: "#7e675e",
          link: "#b08968",
          linkHover: "#a47148",
          gradientFrom: "#ddb892",
          gradientTo: "#b08968",
        },
      },
    },
  },
  plugins: [],
};
