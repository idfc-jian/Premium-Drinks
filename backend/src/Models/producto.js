const mongoose = require('mongoose'); // Importar mongoose.

// Crea el esquema de la colección de productos.
const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    imagenUrl: { type: String, required: true },
    stock: { type: Number, default: 0 },
    categoria:{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required:true}
});

module.exports = mongoose.model('Producto', ProductoSchema); // Exporta el modelo de producto.