// src/components/LoginForm.tsx
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "pablo@example.com" && password === "1234") {
      alert("Login exitoso!");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-slide">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out hover:shadow-md"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out hover:shadow-md"
        required
      />
      <button
        type="submit"
        className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Entrar
      </button>
      <div className="text-center mt-2">
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Olvidé mi contraseña
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
