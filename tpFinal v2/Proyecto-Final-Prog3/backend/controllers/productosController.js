const { Producto } = require('../models');

// GET /api/productos - Obtener todos los productos
const getAllProductos = async (req, res) => {
  try {
    const { status, page = 1, limit = 100 } = req.query;
    
    
    const offset = (page - 1) * limit;
    
    const { count, rows: productos } = await Producto.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']]
    });
    
    res.json({
      productos,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: count,
        totalPages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching productos', message: error.message });
  }
};

// GET /api/tasks/:id - Obtener tarea por ID
const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      return res.status(404).json({ error: 'Producto not found' });
    }
    
    res.json({ producto });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching producto', message: error.message });
  }
};

// POST /api/productos - Crear nuevo producto
const createProducto = async (req, res) => {
  try {
    const { nombre,descripcion,categoria,stock,precio } = req.body;
    
    const producto = await Producto.create({
      nombre,
      descripcion,
      categoria,
      stock,
      precio
    });
    
    res.status(201).json({ 
      message: 'Producto created successfully',
      producto 
    });
  } catch (error) {
    res.status(400).json({ error: 'Error creating producto', message: error.message });
  }
};

// PUT /api/productos/:id - Actualizar producto
const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre,descripcion,categoria,stock,precio } = req.body;
    
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto not found' });
    }
    
    const updatedProducto = await producto.update({
      nombre: nombre || producto.nombre,
      descripcion: descripcion !== undefined ? descripcion : producto.descripcion,
      categoria: categoria || producto.categoria,
      stock: stock !== undefined ? stock : producto.stock,
      precio: precio !== undefined ? precio : producto.precio
    });
    
    res.json({
      message: 'Producto updated successfully',
      producto: updatedProducto
    });
  } catch (error) {
    res.status(400).json({ error: 'Error updating producto', message: error.message });
  }
};

// DELETE /api/productos/:id - Eliminar producto
const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      return res.status(404).json({ error: 'Producto not found' });
    }
    
    await producto.destroy();
    res.json({ message: 'Producto deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting producto', message: error.message });
  }
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};