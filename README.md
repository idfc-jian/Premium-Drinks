# PremiumDrinks - Proyecto de Comercio Electrónico

## Descripción

PremiumDrinks es un proyecto de comercio electrónico que permite a los usuarios registrar, iniciar sesión, crear y gestionar carritos de compras, hacer pedidos, y obtener detalles de órdenes específicas. El proyecto está dividido en dos partes: frontend y backend.

### Frontend

El frontend se encarga de mostrar la interfaz de usuario y las vistas correspondientes. Está construido con HTML5, CSS3 y JavaScript. Utiliza React como framework principal y Redux para gestionar el estado de la aplicación.

### Backend

El backend se encarga de gestionar la lógica de negocio y las operaciones de base de datos. Está construido con Node.js y Express como framework principal. La base de datos está gestionada por PostgreSQL para almacenar la información de los usuarios y MongoDB para la gestión de productos, carritos y órdenes.

## Funcionalidades Principales

* **Autenticación y Autorización:** Implementa autenticación de usuarios utilizando JWT para asegurar las rutas y proteger los datos del usuario.
* **Gestión de Usuarios:** Permite registrar nuevos usuarios, iniciar sesión, obtener y actualizar el perfil de usuario.
* **Gestión de Productos:** Ofrece CRUD completo para productos, incluyendo la creación, obtención, actualización y eliminación de productos.
* **Gestión de Categorías:** CRUD completo para categorías, permitiendo la organización de productos.
* **Carrito de Compras:** Facilita la creación, obtención, actualización y eliminación de carritos de compras para usuarios registrados.
* **Gestión de Órdenes:** Permite crear órdenes a partir de carritos de compras y obtener detalles de órdenes específicas.

## Tecnologías Utilizadas

* **Node.js y Express:** Para la creación de APIs RESTful.
* **PostgreSQL:** Base de datos relacional utilizada para almacenar información de usuarios.
* **MongoDB:** Base de datos NoSQL utilizada para almacenar productos, carritos y órdenes.
* **Mongoose:** Biblioteca ODM para interactuar con MongoDB.
* **bcryptjs:** Para el hashing de contraseñas de usuarios.
* **jsonwebtoken:** Para la generación y verificación de tokens JWT.
* **React:** Para la creación de la interfaz de usuario.
* **Redux:** Para gestionar el estado de la aplicación.
