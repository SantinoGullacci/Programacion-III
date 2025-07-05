function ListaProductos({ productos, onProductoClick }) {
  return (
    <>
      {productos.map((producto) => (
        <div
          key={producto.id}
          className={`producto-item ${producto.stock === 0 ? 'sin-stock' : ''}`}
          onClick={() => onProductoClick(producto.id)}
        >
          <span className="producto-nombre">{producto.nombre}</span>
          <span className="producto-categoria">{producto.categoria}</span>
          <span className="producto-stock">
            {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Sin stock'}
          </span>
        </div>
      ))}
    </>
  );
}
