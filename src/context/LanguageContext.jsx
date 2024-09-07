import { createContext, useContext, useState } from "react";

const languageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("cpp");

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
