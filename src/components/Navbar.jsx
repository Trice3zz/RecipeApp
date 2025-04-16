import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { username, logout } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/random">Random</Link>
      {username ? (
        <>
          <Link to="/favorites">Favorites</Link>
          <button onClick={logout}>Logout ({username})</button>
        </>
      ) : (
        <Link to="/auth">Login</Link>
      )}
    </nav>
  );
}
