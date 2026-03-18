"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async () => {
    setResponseMsg("");

    if (password !== confirmPassword) {
      setResponseMsg("Le password non coincidono.");
      return;
    }

    try {
      const res = await fetch("http://192.168.68.101:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMsg("Registrazione completata!");
      } else {
        setResponseMsg(data.message);
      }
    } catch (err) {
      setResponseMsg("Errore di connessione al server.");
    }
  };

  return (
    <div className="console-box" style={{ width: "100%" }}>
      <div className="box-title">Create Account</div>

      {/* USERNAME */}
      <label>Username</label>
      <input
        type="text"
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* EMAIL */}
      <label style={{ marginTop: "10px" }}>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* PASSWORD */}
      <label style={{ marginTop: "10px" }}>Password</label>
      <input
        type="password"
        placeholder="Choose a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* CONFIRM PASSWORD */}
      <label style={{ marginTop: "10px" }}>Confirm Password</label>
      <input
        type="password"
        placeholder="Repeat your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/* REGISTER BUTTON */}
      <button style={{ marginTop: "20px" }} onClick={handleSubmit}>
        CREATE ACCOUNT
      </button>

      {/* RESPONSE MESSAGE */}
      {responseMsg && (
        <p style={{ marginTop: "15px", color: "white" }}>{responseMsg}</p>
      )}
    </div>
  );
}