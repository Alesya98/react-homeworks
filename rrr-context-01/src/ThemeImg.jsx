import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";

const ThemeImg = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <img src={theme === "ligth" ? sun : moon} alt="Тема" width={100} height={70}/>
  );
};

export default ThemeImg;
