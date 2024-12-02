const express = require('express'); // importar express.
const router = express.Router(); // crear una instancia de express.Router.
const controladorOrden = require('../Controllers/controladorOrden'); // importar el controlador de orden.

// Crear orden desde carrito.
router.post('/:usuarioId/crear', controladorOrden.crearOrdenDesdeCarrito); 

// Obtener orden.
router.get('/:usuarioId/orden/:ordenId', controladorOrden.obtenerOrden); 


module.exports = router; // exportar el router.