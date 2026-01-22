import { useCallback, useState } from "react";
import "./App.css";
import CounterButton from "./CounterButton";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import withRenderTracker from "./hoc";

const CompRenderHOC = withRenderTracker(ItemList);
const CompRenderHOC1 = withRenderTracker(SearchInput);

function App() {
  // console.log("App render");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const heandleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <>
      <CompRenderHOC1 heandleSearch={heandleSearch} search={search} />
      {/* <SearchInput heandleSearch={heandleSearch} search={search} /> */}
      {/* <ItemList items={items} search={search}/> */}
      <p>count: {count}</p>
      <CounterButton addCount={addCount} />
      <CompRenderHOC items={items} search={search} />
    </>
  );
}

export default App;
