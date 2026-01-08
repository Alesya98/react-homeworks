import { useEffect, useState } from "react";

const MyCompFunc = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(`Счетчик изменен на: ${state}`); //componentDidUpdate
  }, [state]);


  return (
    <>
      <h1>LifeCycle</h1>
      <p>Count: {state}</p>
      <button onClick={() => setState((count) => count + 1)}>+</button>
    </>
  );
};

export default MyCompFunc;
