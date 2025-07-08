const API_URL = "http://localhost:3001/api/productos";

export const obtenerProductos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener productos");
  const data = await response.json();
  return data.productos || []; //Extrae array de productos
};

// Obtener todos los productos
export const getProductos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Error al obtener productos');
  return await response.json();
};

// Crear producto
export const createProducto = async (nuevoProducto) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoProducto)
  });
  if (!response.ok) throw new Error('Error al crear producto');
  return await response.json();
};

// Actualizar producto
export const updateProducto = async (id, productoActualizado) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productoActualizado)
  });
  if (!response.ok) throw new Error('Error al actualizar producto');
  return await response.json();
};

// Eliminar producto
export const deleteProducto = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Error al eliminar producto');
  return await response.json();
};
