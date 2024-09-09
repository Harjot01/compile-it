import { createContext, useContext, useEffect, useState } from "react";
import defineTheme from "../lib/defineTheme";
import { monacoThemes } from "../constants/constants";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      setTheme(theme);
    } else {
      setTheme(monacoThemes[11]);
    }
    setIsThemeLoaded(true);
  }, []);
  const handleThemeChange = async (newTheme) => {
    try {
      await defineTheme(newTheme);
      setTheme(newTheme);
      localStorage.setItem("theme", JSON.stringify(newTheme));
    } catch (error) {
      console.error("Error changing theme: ", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange, isThemeLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
