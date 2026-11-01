# Evaluación React Router

## Descripción

Aplicación web desarrollada con React que simula un sistema de inicio de sesión.

El usuario introduce su correo electrónico y contraseña. Si las credenciales son correctas, accede a una pantalla de bienvenida. Si son incorrectas, se muestra un mensaje de error.

## Funcionalidades

- Formulario de inicio de sesión con correo electrónico y contraseña.
- Validación de credenciales mediante un servicio de autenticación.
- Mensaje de error cuando los datos son incorrectos.
- Navegación entre pantallas mediante React Router.
- Uso de `useState` para gestionar los datos del formulario.
- Uso de `useNavigate` para cambiar de pantalla.
- Uso de props para mostrar el correo del usuario en Bienvenida.
- Estilos CSS para mejorar la presentación.

## Tecnologías utilizadas

- React
- JavaScript
- React Router DOM
- HTML y JSX
- CSS
- Git y GitHub

## Estructura del proyecto

```text
src/
├── pages/
│   ├── Login.js
│   └── Bienvenida.js
├── services/
│   └── AuthService.js
├── App.js
├── index.js
└── index.css
```

## Credenciales de prueba

**Correo electrónico:** `admin@gmail.com`

**Contraseña:** `1234`

Estas credenciales se utilizan únicamente para fines educativos. La aplicación simula la autenticación y no utiliza un servidor para gestionar sesiones reales.

## Cómo ejecutar el proyecto

Primero, instalar las dependencias:

```bash
npm install
```

Después, iniciar la aplicación:

```bash
npm start
```

Abrir en el navegador:

`http://localhost:3000`

## Objetivo del proyecto

Practicar los componentes funcionales de React, el uso de estados y props, la validación de formularios y la navegación entre páginas con React Router.