import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/context";
import Cocktail from "./Cocktail";
const CocktailList = () => {
  const context = useContext(AppContext);
  const { cocktail } = context;

  useEffect(() => {}, [cocktail]);

  if (cocktail === null) {
    return <h1 className="text-center mt-3">there is no cocktails .....</h1>;
  }

  return (
    <div className="row mt-5 mb-5">
      {cocktail &&
        cocktail.map((cocktail) => (
          <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
        ))}
    </div>
  );
};

export default CocktailList;
