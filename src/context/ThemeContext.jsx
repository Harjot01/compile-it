import { createContext, useContext, useState } from "react";
import defineTheme, { monacoThemes } from "../lib/defineTheme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("cobalt2");
  const themeColors = monacoThemes[theme];
  const handleThemeChange = async (newTheme) => {
    try {
      await defineTheme(newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error("Error changing theme: ", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
