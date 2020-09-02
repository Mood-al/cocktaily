import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";
import { motion } from "framer-motion";
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
      <motion.div className="cocktailCard" layout whileHover={{ scale: 1.05 }}>
        <div className="img-wrapper">
          <Link to={`/cocktails/${idDrink}`} className="overlay">
            <span className="details">details</span>
          </Link>

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
      </motion.div>
    </div>
  );
};

export default Cocktail;
