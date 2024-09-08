import { createContext, useContext, useState } from "react";
import { languageOptions } from "../constants/constants";

const languageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languageOptions[0]);

  const onSelectLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <languageContext.Provider value={{ language, onSelectLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export const useLanguage = () => useContext(languageContext);
