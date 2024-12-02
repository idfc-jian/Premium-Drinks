const Orden = require('../Models/orden'); // Importa el modelo Orden.
const Carrito = require('../Models/carrito'); // Importa el modelo Carrito.
const pool = require('../Configuration/PostgreSQL'); // Importa la conexión a PostgreSQL.

// Crear una orden desde el carrito.
exports.crearOrdenDesdeCarrito = async (req, res) => {
    const { usuarioId } = req.params;

    try {
        // Verifica que el usuarioId sea válido.
        if (isNaN(usuarioId)) {
            return res.status(400).json({ mensaje: 'El usuarioId debe ser un número válido.' });
        };

        // Verifica que el usuario exista en PostgreSQL.
        const usuarioResult = await pool.query('SELECT * FROM usuarios WHERE id = $1', [usuarioId]);
        if (usuarioResult.rowCount === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado en PostgreSQL.' });
        };
        
        // Busca el carrito del usuario.
        const carrito = await Carrito.findOne({ usuario_id: parseInt(usuarioId) }).populate('productos.producto');
        if (!carrito) {
            return res.status(404).json({ mensaje: 'Carrito no encontrado para el usuario especificado.' });
        };

        // Calcula el total de la orden.
        let total = 0;

        const productosOrden = carrito.productos.map(item => {
            const precio = item.producto.precio * item.cantidad;
            total += precio;
            return {
                producto: item.producto._id,
                cantidad: item.cantidad,
                precio
            };
        });

        // Crea la nueva orden.
        const nuevaOrden = new Orden({
            usuario: parseInt(usuarioId),
            carritoId: carrito._id,
            productos: productosOrden,
            total
        });

        // Guarda la nueva orden en la base de datos.
        await nuevaOrden.save();

        // Elimina los productos del carrito.
        await Carrito.findOneAndUpdate({ usuario_id: parseInt(usuarioId) }, { productos: [] });
        res.status(201).json({ mensaje: 'Orden creada con éxito.', orden: nuevaOrden });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la orden.', error: error.message });
    }
};

// Obtener una orden por su ID.
exports.obtenerOrden = async (req, res) => {
    // Obtiene el ID de la orden desde los parámetros de la solicitud.
    const { ordenId } = req.params;

    try {
        // Busca la orden en la base de datos.
        const orden = await Orden.findById(ordenId).populate('productos.producto');
        if (!orden) {
            return res.status(404).json({ mensaje: 'Orden no encontrada.' });
        };

        res.status(200).json({ mensaje: 'Orden encontrada.', orden });
        
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la orden.', error: error.message });
    };
};