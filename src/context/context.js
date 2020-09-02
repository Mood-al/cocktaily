import React, { useState, useEffect } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("ab");
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => setCocktail(data.drinks));
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        cocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
