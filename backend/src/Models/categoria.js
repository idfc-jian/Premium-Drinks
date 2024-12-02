const mongoose = require('mongoose'); // Importar mongoose.

// Crea el esquema de la colección de categorias.
const CategoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Categoria', CategoriaSchema); // Exporta el modelo de categoria.