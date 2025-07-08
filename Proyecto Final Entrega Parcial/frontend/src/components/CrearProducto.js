import { useState } from 'react';
import { createProducto } from '../services/productoService';

function CrearProducto({ onProductoCreado }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    stock: 0,
    precio: 0
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProducto(formData);
      onProductoCreado(); 
      setFormData({
        nombre: '',
        descripcion: '',
        categoria: '',
        stock: 0,
        precio: 0
      });
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

return (
  <form onSubmit={handleSubmit} className="form-producto">
    <h2>Agregue un producto:</h2>

    <label>Nombre:</label>
    <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />

    <label>Descripción:</label>
    <input name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" />

    <label>Categoría:</label>
    <input name="categoria" value={formData.categoria} onChange={handleChange} placeholder="Categoría" required />

    <label>Stock:</label>
    <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock" />

    <label>Precio:</label>
    <input name="precio" type="number" value={formData.precio} onChange={handleChange} placeholder="Precio" />

    <button type="submit">Crear Producto</button>
  </form>
);

}

export default CrearProducto;
