const express = require('express'); // Importa express.
const router = express.Router(); // Crea una instancia de express.Router.
const controladorUsuario = require('../Controllers/controladorUsuario'); // Importa el controlador de usuario.
const middlewareAutenticacion = require('../Middleware/middlewareAutenticacion'); // Importa el middleware de autenticación.

// Crear usuario.
router.post('/registro', controladorUsuario.registrarUsuario);

// Iniciar sesión.
router.post('/iniciarsesion', controladorUsuario.iniciarSesion);

// Obtener perfil de usuario.
router.get('/perfil', middlewareAutenticacion, controladorUsuario.obtenerPerfilUsuario);

// Actualizar perfil de usuario.
router.put('/perfil', middlewareAutenticacion, controladorUsuario.actualizarPerfilUsuario);

module.exports = router; // Exporta el router.