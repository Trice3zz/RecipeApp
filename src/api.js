const BASE = "https://fsa-recipe.up.railway.app/api";

export const registerUser = async (username, password) => {
  const res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const loginUser = async (username, password) => {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const fetchAllRecipes = () => fetch(`${BASE}/recipes`).then(res => res.json());
export const fetchSingleRecipe = id => fetch(`${BASE}/recipes/${id}`).then(res => res.json());
export const fetchRandomRecipe = () => fetch(`${BASE}/recipes/random`).then(res => res.json());

export const fetchFavorites = (token) =>
  fetch(`${BASE}/favorites`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json());

export const addFavorite = (token, mealId) =>
  fetch(`${BASE}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ mealId }),
  }).then(res => res.json());

export const deleteFavorite = (token, id) =>
  fetch(`${BASE}/favorites/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
