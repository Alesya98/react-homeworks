import { useState } from "react";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Parent from "./ParentComponent";
import Child from "./ChildComponent";
import Sibling from "./SiblingComponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Parent num={count} />
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
      <button onClick={() => setCount(Math.floor(Math.random() * 10) + 1)}>
        Случайное значение
      </button>
      <button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : 0)}>Уменьшить</button>

      <Child name={'Алеся'} num={count}/>

      <Sibling text={'Done'}/>
    </>
  );
}

export default App;
