import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("Введите текст");
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setText("")}>clear</button>
    </>
  );
};

export default Input;
