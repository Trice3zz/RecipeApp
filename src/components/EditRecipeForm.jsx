import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function EditRecipeForm() {
  const { id } = useParams();
  const { token, username } = useContext(AuthContext);
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.username === username) {
          setForm(data);
        } else {
          alert("You cannot edit another user's recipe.");
        }
      });
  }, [id, username]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });
    alert("Recipe updated!");
  };

  if (!form) return <p>Loading or unauthorized...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input name="strMeal" value={form.strMeal} onChange={handleChange} />
      <input name="strMealThumb" value={form.strMealThumb} onChange={handleChange} />
      <input name="strCategory" value={form.strCategory} onChange={handleChange} />
      <textarea name="strInstructions" value={form.strInstructions} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}
