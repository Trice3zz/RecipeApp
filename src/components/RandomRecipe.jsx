import React, { useEffect, useState } from "react";
import { fetchRandomRecipe } from "../api";

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRandomRecipe().then(data => setRecipe(data));
  }, []);

  return recipe ? (
    <div className="recipe-card">
      <h2>🌟 Recipe of the Day 🌟</h2>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

