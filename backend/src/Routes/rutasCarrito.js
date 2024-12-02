const express = require('express'); // Importa express.
const router = express.Router(); // Crea una instancia de express.Router.
const controladorCarrito = require('../Controllers/controladorCarrito'); // Importa el controlador de carrito.

// Crear carrito.
router.post('/crear', controladorCarrito.crearCarrito);

// Obtener carrito.
router.get('/:usuario_id', controladorCarrito.obtenerCarrito);

// Actualizar carrito.
router.put('/actualizar', controladorCarrito.actualizarCarrito);

// Eliminar carrito.
router.delete('/vaciar/:usuario_id', controladorCarrito.eliminarCarrito);

module.exports = router; // Exporta el router.