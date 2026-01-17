// import { useState } from "react";

const MyComp = ({ items, setItems }) => {
  const addSign = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: "!!!" + item.text } : item
      )
    );
  };

  return (
    <>
      <ul style={{listStyle: 'none'}}>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button style={{marginLeft: '20px'}} onClick={() => addSign(item.id)}>!!!</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyComp;
