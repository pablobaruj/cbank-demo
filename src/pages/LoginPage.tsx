import React from 'react';
import '../index.css';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-white to-pink-100 animate-gradient-bg p-4">
      <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl w-full max-w-md p-6 sm:p-8 animate-fade-slide">
        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-4 animate-bounce-slow">
          Cayetano Bank
        </h1>
        <p className="text-center text-gray-700 mb-6">Inicia sesión con tu correo electrónico</p>
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-5 py-4 rounded-2xl border border-white/40 bg-white/50 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-md transition duration-300 ease-in-out"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-5 py-4 rounded-2xl border border-white/40 bg-white/50 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-md transition duration-300 ease-in-out"
          />
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:from-red-600 hover:to-pink-600"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-gray-600 mt-5 text-sm">
          Todos los datos se mantienen de forma segura
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

