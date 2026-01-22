import { memo } from "react";

const CounterButton = ({addCount }) => {
  // console.log("render Button");
  return (
    <>
      <button onClick={addCount}>Увеличить</button>
    </>
  );
};

export default memo(CounterButton);

