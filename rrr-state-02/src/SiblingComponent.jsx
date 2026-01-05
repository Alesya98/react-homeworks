import { useState } from "react";

const Sibling = ({ text }) => {
  const [word, setWord] = useState(true);
  return (
    <>
      {word ? <p>Текущий текст: {text}</p> : <p>Текущий текст: REDEV</p>}

      <button
        onClick={() => {
          setWord((item) => !item);
        }}
      >
        Изменить текст
      </button>
    </>
  );
};

export default Sibling;
