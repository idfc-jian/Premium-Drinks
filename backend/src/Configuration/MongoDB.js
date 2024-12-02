const mongoose = require('mongoose'); //Importa mongoose.
const dotenv = require('dotenv'); //Importa dotenv.

dotenv.config(); //Carga las variables de entorno.

// Crea la conexión a la base de datos.
const conectarBD = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser :true,
            useUnifiedTopology :true
        });

        console.log('MongoDB conectado correctamente!');

    } catch(error){
        console.error('Error al conectar a MongoDB.', error);
        process.exit(1);
    }
};

module.exports = conectarBD; // Exporta la función conectarBD.