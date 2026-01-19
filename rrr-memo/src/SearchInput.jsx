import { memo } from "react";

const SearchInput = ({ search, heandleSearch }) => {
  console.log("render search");

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={heandleSearch}
        placeholder="Введите текст"
      />
    </>
  );
};

export default memo(SearchInput);
