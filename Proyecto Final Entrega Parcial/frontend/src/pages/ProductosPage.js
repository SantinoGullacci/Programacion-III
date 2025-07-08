import { useEffect, useState } from 'react';
import { getProductos, deleteProducto } from '../services/productoService';
import ListaProductos from '../components/ListaProductos';
import CrearProducto from '../components/CrearProducto';
import EditarProducto from '../components/EditarProducto';

function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const data = await getProductos();
      setProductos(data.productos);
      setProductoSeleccionado(null);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  const handleProductoClick = (id) => {
    const prod = productos.find(p => p.id === id);
    setProductoSeleccionado(prod);
  };

  const handleEliminarProducto = async (id) => {
    if (window.confirm('¿Eliminar producto?')) {
      await deleteProducto(id);
      cargarProductos();
    }
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1 className='barrabuscador'>Listado de Productos</h1>

      <input className="barrabuscador"
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: '12px', padding: '6px', width: '300px' }}
      />
      <CrearProducto onProductoCreado={cargarProductos} />

      <ListaProductos
        productos={productosFiltrados}
        onProductoClick={handleProductoClick}
        onEliminarProducto={handleEliminarProducto}
        productoSeleccionado={productoSeleccionado}
        onProductoActualizado={cargarProductos}
        onCancelarEdicion={() => setProductoSeleccionado(null)}
      />


      {productoSeleccionado && (
        <EditarProducto
          producto={productoSeleccionado}
          onProductoActualizado={cargarProductos}
          onCancelar={() => setProductoSeleccionado(null)}
        />
      )}
    </div>
  );
}

export default ProductosPage;
