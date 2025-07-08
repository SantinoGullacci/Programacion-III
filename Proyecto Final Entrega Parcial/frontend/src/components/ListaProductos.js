import EditarProducto from './EditarProducto';

export default function ListaProductos({
  productos,
  onProductoClick,
  onEliminarProducto,
  productoSeleccionado,
  onProductoActualizado,
  onCancelarEdicion
}) {
  return (
    <>
      {productos.map((producto) => (
        <div
          key={producto.id}
          className={`producto-item ${producto.stock === 0 ? 'sin-stock' : ''}`}
          onClick={() => onProductoClick(producto.id)}
        >
          <span className="producto-nombre">{producto.nombre}</span><br/>
          <span className="producto-categoria">{producto.categoria}</span><br/>
          <span className="producto-descripcion">{producto.descripcion}</span><br/>
          <span className="producto-stock">
            {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Sin stock'}
          </span><br/>
          <span className="producto-precio">${producto.precio}</span><br/>
          <button onClick={(e) => { e.stopPropagation(); onEliminarProducto(producto.id) }}>Eliminar</button>

          {productoSeleccionado?.id === producto.id && (
            <EditarProducto
              producto={productoSeleccionado}
              onProductoActualizado={onProductoActualizado}
              onCancelar={onCancelarEdicion}
            />
          )}
        </div>
      ))}
    </>
  );
}
