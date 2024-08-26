import React from "react";

export default function Login() {
  return (
    <div className="mt-1 grow flex items-center justify-around">
      <div>
        <h1 className="text-4xl mb-2 text-center">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button
            type="button"
            className="w-full bg-primary p-2 text-white text-xl font-sans rounded-md mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
