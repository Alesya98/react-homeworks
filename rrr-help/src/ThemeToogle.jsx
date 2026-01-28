import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-control">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="toggle-slider"></span>
      </label>
      <span>Тема: {theme === "ligth" ? "ligth" : "dark"}</span>
    </div>
  );
};

export default ThemeToggle;
