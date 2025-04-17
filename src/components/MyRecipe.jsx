import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function MyRecipes() {
  const { token, username } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://fsa-recipe.up.railway.app/api/recipes", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        const myRecipes = data.filter(r => r.username === username);
        setRecipes(myRecipes);
      });
  }, [token, username]);

  const deleteRecipe = async (id) => {
    await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setRecipes(prev => prev.filter(r => r.idMeal !== id));
  };

  return (
    <div>
      <h2>My Recipes</h2>
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strInstructions.slice(0, 100)}...</p>
          <button onClick={() => deleteRecipe(recipe.idMeal)}>Delete</button>
          <a href={`/edit-recipe/${recipe.idMeal}`}><button>Edit</button></a>
        </div>
      ))}
    </div>
  );
}
