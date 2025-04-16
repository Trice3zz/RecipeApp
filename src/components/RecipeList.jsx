import React, { useEffect, useState } from "react";
import { fetchAllRecipes } from "../api";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchAllRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <Link to={`/recipe/${recipe.idMeal}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
