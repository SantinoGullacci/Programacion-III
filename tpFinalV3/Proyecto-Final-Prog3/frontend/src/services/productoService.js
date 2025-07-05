const API_URL = "http://localhost:3001/api/productos";

export const obtenerProductos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener productos");
  return await response.json();
};
