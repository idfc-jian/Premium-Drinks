# Proyecto Backend.

Este proyecto backend está diseñado para gestionar un sistema de comercio electrónico que incluye funcionalidades para usuarios, productos, categorías, carritos y órdenes. Está construido con Node.js y utiliza Express como framework principal. La base de datos está gestionada por PostgreSQL para almacenar la información de los usuarios y MongoDB para la gestión de productos, carritos y órdenes.

## Funcionalidades Principales.

- **Autenticación y Autorización:** Implementa autenticación de usuarios utilizando JWT para asegurar las rutas y proteger los datos del usuario.
- **Gestión de Usuarios:** Permite registrar nuevos usuarios, iniciar sesión, obtener y actualizar el perfil de usuario.
- **Gestión de Productos:** Ofrece CRUD completo para productos, incluyendo la creación, obtención, actualización y eliminación de productos.
- **Gestión de Categorías:** CRUD completo para categorías, permitiendo la organización de productos.
- **Carrito de Compras:** Facilita la creación, obtención, actualización y eliminación de carritos de compras para usuarios registrados.
- **Gestión de Órdenes:** Permite crear órdenes a partir de carritos de compras y obtener detalles de órdenes específicas.

## Tecnologías Utilizadas.

- **Node.js y Express:** Para la creación de APIs RESTful.
- **PostgreSQL:** Base de datos relacional utilizada para almacenar información de usuarios.
- **MongoDB:** Base de datos NoSQL utilizada para almacenar productos, carritos y órdenes.
- **Mongoose:** Biblioteca ODM para interactuar con MongoDB.
- **bcryptjs:** Para el hashing de contraseñas de usuarios.
- **jsonwebtoken:** Para la generación y verificación de tokens JWT.