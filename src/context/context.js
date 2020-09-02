import React, { useState, useEffect } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("ab");
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks);
        setLoading(false);
      });
  }, [searchTerm]);
  console.log(loading);
  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        cocktail,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
