const jwt = require('jsonwebtoken'); //Importa jsonwebtoken.

// Middleware de autenticación.
const middlewareAutenticacion = (req, res, next) =>{
    // Obtiene el token de la cabecera de la solicitud.
    const token = req.headers['authorization']?.split(' ')[1]
    if(!token){
        return res.status(403).json({
            mensaje:'Se requiere token de autenticación.'
        })
    };

    // Verifica el token.
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) =>{
        if(error){
            return res.status(401).json({ mensaje: 'Token invaldio.', error:error.message})
        }
        req.user = decoded
        next()
    })
};

module.exports = middlewareAutenticacion; // Exporta el middleware de autenticación.