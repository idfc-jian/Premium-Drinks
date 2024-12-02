import React, { useEffect, useState } from "react";
import apiClient from "../api/axiosConfig";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await apiClient.get("/productos");
        setProductos(response.data);
      } catch (err) {
        setError("Error al cargar los productos");
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lista de productos.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-5">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={producto.imagenUrl}
                alt={producto.nombre}
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {producto.nombre}
                </h5>
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                ${producto.precio}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {producto.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Productos;