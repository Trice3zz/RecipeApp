import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleRecipe, addFavorite } from "../api";
import { AuthContext } from "../context/AuthContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchSingleRecipe(id).then(data => setRecipe(data));
  }, [id]);

  const handleFavorite = () => {
    if (token) addFavorite(token, id);
  };

  return recipe ? (
    <div className="recipe-card">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      {token && <button onClick={handleFavorite}>Add to Favorites</button>}
    </div>
  ) : (
    <p>Loading...</p>
  );
}
