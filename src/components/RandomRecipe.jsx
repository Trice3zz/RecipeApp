import React, { useEffect, useState } from "react";
import { fetchRandomRecipe } from "../api";

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRandomRecipe().then(data => setRecipe(data));
  }, []);

  return recipe ? (
    <div>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} width={300} />
      <p>{recipe.strInstructions}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
