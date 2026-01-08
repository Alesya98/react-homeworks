import { useState } from "react";

const Text = ({ title }) => {
  const [state, setState] = useState(true);
  return (
    <>
      {state && <p>{title}</p>}

      <button onClick={() => setState((word) => !word)}>Text</button>

    </>

  );
};

export default Text;
