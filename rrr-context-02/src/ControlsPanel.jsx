import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"
import { ThemeContext } from "./ThemeContext"


const ControlsPanel = () => {
    const { toggleLanguage} = useContext(LanguageContext)
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div>
        <button className={`btn ${theme}`} onClick={toggleLanguage}>Сменить язык</button>
        <button className={`btn ${theme}`} onClick={toggleTheme}>Сменить тему</button>
        </div>
        
    )
}

export default ControlsPanel