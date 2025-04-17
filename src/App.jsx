import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import RandomRecipe from "./components/RandomRecipe";
import Favorites from "./components/Favorites";
import AuthForm from "./components/AuthForm";
import CreateRecipeForm from "./components/CreateRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import MyRecipes from "./components/MyRecipe";
import "./styles.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        {/* 🍎 Falling Fruit Decorations */}
        <div className="fruit" style={{ top: '0%', left: '10%', backgroundImage: "url('https://i.imgur.com/XJ9LJlT.png')" }} />
        <div className="fruit" style={{ top: '0%', left: '40%', backgroundImage: "url('https://i.imgur.com/uYxZCIz.png')" }} />
        <div className="fruit" style={{ top: '0%', left: '70%', backgroundImage: "url('https://i.imgur.com/9me9FdN.png')" }} />
        <div className="fruit" style={{ top: '0%', left: '25%', backgroundImage: "url('https://i.imgur.com/tmTgKdn.png')" }} />

        {/* 🦋 Butterflies */}
        <div className="butterfly" style={{ top: '80%', left: '10%' }} />
        <div className="butterfly" style={{ top: '20%', left: '30%' }} />
        <div className="butterfly" style={{ top: '60%', left: '50%' }} />

        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/random" element={<RandomRecipe />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/create-recipe" element={<CreateRecipeForm />} />
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
