import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registration(e) {
    e.preventDefault();
    axios.get("http://localhost:3000/test");
  }

  return (
    <div className="mt-1 grow flex items-center justify-around">
      <div>
        <h1 className="text-4xl mb-2 text-center">Registration</h1>
        <form onSubmit={registration} className="max-w-md mx-auto">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button
            type="button"
            className="w-full bg-primary p-2 text-white text-xl font-sans rounded-md mt-2"
          >
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member ?
            <Link to={"/login"} className="underline text-blue-500">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
