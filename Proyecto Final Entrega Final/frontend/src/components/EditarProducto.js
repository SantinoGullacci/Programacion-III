import { useState, useEffect } from 'react';
import { updateProducto } from '../services/productoService';

function EditarProducto({ producto, onProductoActualizado, onCancelar }) {
  const [formData, setFormData] = useState(producto);

  useEffect(() => {
    setFormData(producto);
  }, [producto]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProducto(producto.id, formData);
      onProductoActualizado();
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };

  const handleCancelar=()=>{
    setFormData(producto);
    onCancelar && onCancelar();
  };

  return (
    <form onSubmit={handleSubmit} className="form-editar-producto">
      <h3>Editando: {producto.nombre}</h3>
      <input name="nombre" value={formData.nombre} onChange={handleChange} />
      <input name="descripcion" value={formData.descripcion} onChange={handleChange} />
      <input name="categoria" value={formData.categoria} onChange={handleChange} />
      <input name="stock" type="number" value={formData.stock} onChange={handleChange} />
      <input name="precio" type="number" value={formData.precio} onChange={handleChange} />
      <button type="submit">Actualizar</button>
      <button type="button" onClick={handleCancelar}>Cancelar</button>
    </form>
  );
}

export default EditarProducto;
