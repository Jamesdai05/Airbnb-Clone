import React from "react";

export default function Login() {
  return (
    <div className="mt-8">
      <h1 className="text-4xl mb-1 text-center">Login</h1>
      <form action="" className="max-w-md mx-auto">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="button">Login</button>
      </form>
    </div>
  );
}
