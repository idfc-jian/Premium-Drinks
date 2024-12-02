const express = require('express'); // importar express.
const router = express.Router(); // crear una instancia de express.Router.
const controladorCategoria = require('../Controllers/controladorCategoria'); // importar el controlador de categoria.

// Crear categoria.
router.post('/', controladorCategoria.crearCategoria);

// Obtener categorias.
router.get('/', controladorCategoria.obtenerCategorias);

// Actualizar categoria.
router.put('/:id', controladorCategoria.actualizarCategoria);

// Eliminar categoria.
router.delete('/:id', controladorCategoria.eliminarCategoria);

module.exports = router; // exportar el router.