import { useRef } from "react";

const withRenderTracker = (CompRender) => {
  const name = CompRender.displayName || CompRender.name || "ItemList";
  const name1 = CompRender.displayName || CompRender.name || "SearchInput";

  return (props) => {
    const countRef = useRef(0);
    const countRef1 = useRef(0);

    console.log(`Компонент ${name} рендерился ${countRef.current++} раз`);
    console.log(`Компонент ${name1} рендерился ${countRef1.current++} раз`);
    return <CompRender {...props} />;
  };
};

export default withRenderTracker;
