const mongoose = require('mongoose'); // Importa mongoose.

// Crea el esquema de la colección de ordenes.
const ordenSchema = new mongoose.Schema({
    usuario: {
        type: Number,
        required: true
    },
    carritoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carrito',
        required: true
    },
    productos: [
        {
            producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Producto',
                required: true
            },

            cantidad: { type: Number, required: true },
            precio: { type: Number, required: true }
        }
    ],

    total: { type: Number, required: true },
    estado: {
        type: String, enum: ["pendiente", "enviado", "entregado", "cancelado"],
        default: "pendiente",
    },
    
    fechaCreacion: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Orden', ordenSchema); // Exporta el modelo de orden.