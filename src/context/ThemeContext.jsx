import { createContext, useContext, useState } from "react";
import defineTheme, { colorMonacoThemes } from "../defineTheme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("cobalt");
  const themeColors = colorMonacoThemes[theme];
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
