const express = require('express'); // Importa express.
const dotenv = require('dotenv'); // Importa dotenv.
const cors = require('cors'); // Importa cors.
const conectarBD = require('./src/Configuration/MongoDB'); // Importa la conexión a MongoDB.
const pool = require('./src/Configuration/PostgreSQL'); // Importa la conexión a PostgreSQL.
const middlewareAutenticacion = require('./src/Middleware/middlewareAutenticacion'); // Importa el middleware de autenticación.

dotenv.config(); // Carga las variables de entorno.

const app = express(); // Crea una instancia de express.

app.use(express.json()); // Permite recibir datos en formato JSON.
app.use(cors()); // Permite solicitudes de origen cruzado.

conectarBD(); // Conecta a la base de datos.

pool.connect().catch(err => console.error('Error al conectar a PostgreSQL.', err.message)); // Verifica la conexión a PostgreSQL.

// Rutas de la API.
app.use('/api/productos', require('./src/Routes/rutasProducto'));
app.use('/api/usuarios', require('./src/Routes/rutasUsuario'));
app.use('/api/ordenes', require('./src/Routes/rutasOrden'));
app.use('/api/carrito', require('./src/Routes/rutasCarrito'));
app.use('/api/categorias', require('./src/Routes/rutasCategoria'));

// Middleware de autenticación.
app.get('/api/usuarios/perfil', middlewareAutenticacion, (req, res) => {
    res.status(200).json({ mensaje: 'Perfil de usuario', usuario: req.user });
});

// Manejo de errores.
app.use((req, res, next) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Manejo de errores globales.
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
});

// Inicia el servidor.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost: ${PORT}`);
});