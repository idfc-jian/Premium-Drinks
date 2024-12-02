import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a Premium Drinks</h1>
        <p className="text-lg text-gray-600">Explora nuestros productos.</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default Home;