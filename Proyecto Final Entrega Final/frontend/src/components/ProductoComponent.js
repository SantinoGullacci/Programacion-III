import React from "react";

function ProductoItem({ producto, onClick }) {
  return (
    <div
      className={`producto-item ${producto.stock === 0 ? 'sin-stock' : ''}`}
      onClick={() => onClick(producto.id)}
    >
      <span className="producto-nombre">{producto.nombre}</span>
      <span className="producto-categoria">{producto.categoria}</span>
      <span className="producto-stock">
        {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Sin stock'}
      </span>
    </div>
  );
}

export default ProductoItem;
