import { useState } from "react";

const TextColor = ({ text }) => {
  const [color, setColor] = useState("red");
  const style = { color: color };
  return (
    <>
      <p style={style}>{text}</p>
      <button onClick={() => {setColor(color === "red" ? "blue" : "red")}}>
        Сменить цвет
      </button>
    </>
  );
};

export default TextColor;
