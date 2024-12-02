const { Pool } = require('pg'); // Importa el Pool de pg para gestionar las conexiones a Postgres.

// Configuración de la conexión a la base de datos.
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'PremiumDrinks',
    password: 'Ingeniero-2024',
    port: 5432
});

// Verifica la conexión a la base de datos.
pool.connect()
    .then(() => console.log('PostgreSQL conectado correctamente!'))
    .catch(err => console.error('Error al conectar a PostgreSQL.', err.message));

// Exporta el pool directamente.
module.exports = pool;