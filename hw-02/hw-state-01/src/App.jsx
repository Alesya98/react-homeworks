import { useState } from "react";

import "./App.css";
import MyComp from "./MyComp";
import Text from "./Text";
import Input from "./Input";
import TextColor from "./TextColor";

function App() {
  const [state, SetState] = useState(1);

  return (
    <>
      <MyComp count={state} />
      <button onClick={() => SetState((prev) => prev + 1)}>Click</button>
      <button onClick={() => SetState(0)}>Reset</button>

      <Text
        title={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />

      <Input />

      <TextColor  text= {'REDEV'}/>
    </>
  );
}

export default App;
