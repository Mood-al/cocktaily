import React, { useContext } from "react";
import { AppContext } from "../context/context";
const SearchInput = () => {
  const context = useContext(AppContext);
  const { setSearchTerm } = context;
  const formHandeler = (e) => {
    e.preventDefault();
  };
  const inputHandeler = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={formHandeler}>
      <input
        type="text"
        placeholder="find your favorite cocktail"
        onChange={inputHandeler}
      />
    </form>
  );
};

export default SearchInput;
