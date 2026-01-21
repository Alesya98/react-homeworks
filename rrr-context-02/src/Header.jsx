import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import translations from "./translations";


const Header = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

const text = translations[language].welcome

return (
    <header className={`header ${theme}`}>
        <h1>{text}</h1>
    </header>
)
};

export default Header;