import React from "react";

export default function LoginForm() {
  return (
    <form className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Iniciar sesión</h2>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Email</label>
        <input
          type="email"
          placeholder="ejemplo@correo.com"
          className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Contraseña</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold"
      >
        Entrar
      </button>
    </form>
  );
}
