import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";
const Cocktail = ({ cocktail }) => {
  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strGlass,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  } = cocktail;
  return (
    <div className="col-md-4 m-auto">
      <div className="cocktailCard">
        <div className="img-wrapper">
          <div className="img">
            <Link to={`/cocktails/${idDrink}`} className="details">
              details
            </Link>
          </div>
          <img src={strDrinkThumb} alt={strDrink} />
        </div>

        <div className="cocktailCardContent">
          <h3>{strDrink}</h3>
          <h5>{strGlass}</h5>
          <p>{strAlcoholic}</p>
        </div>
        <div className="badges">
          <span>{strIngredient1}</span>
          <span>{strIngredient2}</span>
          <span>{strIngredient3}</span>
          <span>{strIngredient4}</span>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
