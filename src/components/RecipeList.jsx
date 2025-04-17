import React, { useEffect, useState } from "react";
import { fetchAllRecipes } from "../api";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchAllRecipes().then(data => setRecipes(data));
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const nameMatch = recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = filter ? recipe.strCategory === filter : true;
    return nameMatch && categoryMatch;
  });

  const categories = [...new Set(recipes.map(r => r.strCategory))];

  return (
    <div>
      <h2>All Recipes</h2>
      <input
        placeholder="Search Recipes"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>

      {filteredRecipes.map(recipe => (
        <div className="recipe-card" key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <Link to={`/recipe/${recipe.idMeal}`}><button>View Details</button></Link>
        </div>
      ))}
    </div>
  );
}
