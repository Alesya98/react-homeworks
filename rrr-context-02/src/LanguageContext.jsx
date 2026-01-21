import { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvader = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === "en") return 'ru';
      if (prev === "ru") return 'de';
      if (prev === "de") return 'es';
      return 'en';
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvader };
