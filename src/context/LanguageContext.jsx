import { createContext, useContext, useEffect, useState } from "react";
import { languageOptions } from "../constants/constants";

const languageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({});

  useEffect(() => {
    const language = JSON.parse(localStorage.getItem("language"));
    if (language) {
      setLanguage(language);
    } else {
      setLanguage(languageOptions[0]);
    }
  }, []);

  const onSelectLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", JSON.stringify(newLanguage));
  };

  return (
    <languageContext.Provider value={{ language, onSelectLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export const useLanguage = () => useContext(languageContext);
