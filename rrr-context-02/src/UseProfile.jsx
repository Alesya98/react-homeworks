import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import translations from "./translations";

const UseProfile = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const text = translations[language].profile;

  return (
    <div className={`text ${theme}`}>
      <p>{text}</p>
    </div>
  );
};

export default UseProfile;
