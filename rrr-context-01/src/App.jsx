import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import ThemeImg from "./ThemeImg";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <ThemeImg/>
      <h2>Dark/Ligth</h2>
      <p>Toggle dark or ligth to customizi your interface</p>
      <ThemeToggle />
    </div>
  );
}

export default App;
