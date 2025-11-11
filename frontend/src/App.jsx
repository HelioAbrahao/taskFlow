import { useState } from "react";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <h1>TaskFlow</h1>
      {!user ? <Login onLogin={handleLogin} /> : <Tasks user={user} />}
    </div>
  );
}
