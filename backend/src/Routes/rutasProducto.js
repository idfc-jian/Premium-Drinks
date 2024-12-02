const express = require('express'); // Importa express.
const router = express.Router(); // Crea una instancia de express.Router.
const controladorProducto = require('../Controllers/controladorProducto'); // Importa el controlador de producto.

// Crear producto.
router.post('/', controladorProducto.crearProducto);

// Obtener productos.
router.get('/', controladorProducto.obtenerProductos);

// Actualizar producto.
router.put('/:id', controladorProducto.actualizarProducto);

// Eliminar producto.
router.delete('/:id', controladorProducto.eliminarProducto);

module.exports = router; // Exporta el router.