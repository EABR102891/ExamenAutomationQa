# Proyecto de Automatización de API - Usuarios ServeRest

Este proyecto automatiza los casos de prueba CRUD (Crear, Leer, Actualizar y Eliminar) sobre la API de usuarios del sistema [ServeRest](https://serverest.dev/), utilizando **Karate DSL**.

---

## Funcionalidades probadas

- GET /usuarios -  Obtener lista de usuarios
- POST /usuarios -  Registrar un nuevo usuario
- GET /usuarios/{_id} - Buscar usuario por ID
- PUT /usuarios/{_id} - Actualizar información del usuario
- DELETE /usuarios/{_id} - Eliminar un usuario

---

## Estrategia de pruebas

- Cada operación del CRUD se encuentra automatizada en un archivo .feature.
- Se encadenan requests cuando es necesario (por ejemplo, crear un usuario y luego actualizarlo).
- Se validan respuestas y campos clave como _id, nome, email
- Se realizaron pruebas positivas.
---

## Requisitos

- Tener Java
- Tener el archivo karate-1.5.1.jar en la raíz del proyecto

---

## ¿Cómo ejecutar?
Desde la terminal en la raíz del proyecto:
java -jar karate-1.5.1.jar features/postUsuarios.feature