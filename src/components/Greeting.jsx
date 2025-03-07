// Frontend - React Component

import { useState } from "react";

const GreetingApp = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000.vercel.app/api/greet?name=${name}`
      );
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch {
      setMessage("Error fetching greeting.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Greeting App</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={getGreeting}>Get Greeting</button>
      <p>{message}</p>
    </div>
  );
};

export default GreetingApp;
