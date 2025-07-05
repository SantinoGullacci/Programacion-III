
import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoService";
import ProductoItem from "../components/ProductoComponent";

function ProductosPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    cargarProductos();
  }, []);

  const handleProductoClick = (id) => {
    alert(`Hiciste click en el producto con ID: ${id}`);
  };

  return (
    <div>
      <h1>Listado de Productos</h1>
      {productos.map((producto) => (
        <ProductoItem
          key={producto.id}
          producto={producto}
          onClick={handleProductoClick}
        />
      ))}
    </div>
  );
}

export default ProductosPage;
