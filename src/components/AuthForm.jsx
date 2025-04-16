import React, { useState, useContext } from "react";
import { registerUser, loginUser } from "../api";
import { AuthContext } from "../context/AuthContext";

export default function AuthForm() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = isLogin
        ? await loginUser(username, password)
        : await registerUser(username, password);

      if (data.token) {
        login(data.token, data.username);
      } else {
        setError("Authentication failed.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">{isLogin ? "Login" : "Register"}</button>
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
        {isLogin ? "Need an account? Register" : "Have an account? Login"}
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
