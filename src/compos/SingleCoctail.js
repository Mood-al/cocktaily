import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleCocktail.css";
const SingleCoctail = () => {
  const [singleCocktail, setSingleCocktail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      let data = await res.json();
      setSingleCocktail(data.drinks);
    };
    fetchApi();
  }, [id]);

  return (
    <>
      {singleCocktail &&
        singleCocktail.map((item) => {
          console.log(item);
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
            strInstructions,
          } = item;
          return (
            <div className="row singleWrapper" key={idDrink}>
              <div className="col-md-6 ">
                <div className="singleImg">
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
              </div>
              <div className="col-md-6 desc">
                <h1>
                  name : <span>{strDrink}</span>
                </h1>
                <h2>
                  kind : <span>{strAlcoholic}</span>
                </h2>
                <h2>
                  glass : <span>{strGlass}</span>
                </h2>
                <div className="ingredients row">
                  <h2 className="col-md-4">Ingredients: </h2>
                  <ul className="col-md-8 ">
                    <li>{strIngredient1}</li>
                    <li>{strIngredient2}</li>
                    <li>{strIngredient3}</li>
                    <li>{strIngredient4}</li>
                  </ul>
                </div>
                <div className="instructions">
                  <h2>
                    Instructions:
                    <span>
                      {"  "}
                      {strInstructions}
                    </span>
                  </h2>
                </div>
                <Link to="/" className="return">
                  back to home
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SingleCoctail;
