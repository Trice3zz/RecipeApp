import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function CreateRecipeForm() {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({
    strMeal: "",
    strInstructions: "",
    strMealThumb: "",
    strCategory: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://fsa-recipe.up.railway.app/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });
    alert("Recipe created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Recipe</h2>
      <input name="strMeal" placeholder="Title" onChange={handleChange} />
      <input name="strMealThumb" placeholder="Image URL" onChange={handleChange} />
      <input name="strCategory" placeholder="Category" onChange={handleChange} />
      <textarea name="strInstructions" placeholder="Instructions" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
