import { useState, useRef } from "react";

import "./App.css";
import MyComp from "./List";

function App() {
  const [items, setItems] = useState([]);
  const [clear, setClear] = useState("");
  const idRef = useRef(1);
  const inputRef = useRef();

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newItem = {
        id: idRef.current,
        text: e.target.value,
      };

      setItems((prev) => [...prev, newItem]);
      idRef.current += 1;
      setClear('')
    }
  };

  const handleChange = (e) => {
    setClear(e.target.value);
  };

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        style={{ marginRight: "20px" }}
        ref={inputRef}
        type="text"
        value={clear}
        onKeyDown={handleOnKeyDown}
        onChange={handleChange}
      />
      <button onClick={focusInput}>Focus</button>

      <MyComp items={items} setItems={setItems} />
    </>
  );
}

export default App;
