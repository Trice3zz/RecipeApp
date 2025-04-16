import React, { useEffect, useState, useContext } from "react";
import { fetchFavorites, deleteFavorite } from "../api";
import { AuthContext } from "../context/AuthContext";

export default function Favorites() {
  const { token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites(token).then(setFavorites);
  }, [token]);

  const removeFavorite = (id) => {
    deleteFavorite(token, id).then(() =>
      setFavorites(prev => prev.filter(fav => fav.id !== id))
    );
  };

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(fav => (
        <div key={fav.id}>
          <p>{fav.mealName}</p>
          <button onClick={() => removeFavorite(fav.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
