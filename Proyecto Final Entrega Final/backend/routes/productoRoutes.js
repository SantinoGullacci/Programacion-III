const express = require('express');
const router = express.Router();

const {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productosController');

// GET /api/productos - Obtener todos los productos
router.get('/', getAllProductos);

// GET /api/productos/:id - Obtener producto por ID
router.get('/:id', getProductoById);

// POST /api/productos - Crear nuevo producto
router.post('/', createProducto);

// PUT /api/productos/:id - Actualizar producto
router.put('/:id', updateProducto);

// DELETE /api/productos/:id - Eliminar producto
router.delete('/:id', deleteProducto);

module.exports = router;