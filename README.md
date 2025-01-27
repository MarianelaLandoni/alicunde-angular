# Prueba Angular Alicunde - Aplicación de Inicio de Sesión

## Descripción

Esta es una prueba desarrollada en Angular 17 que consiste en una aplicación de dos pantallas:

1. **Pantalla de Login**: Un formulario con los campos de correo electrónico y contraseña.
2. **Pantalla de Éxito (Success)**: Al enviar el formulario correctamente, se redirige a una pantalla de éxito con un GIF animado y un botón que muestra más confeti.

## Componentes Principales

### 1. **LoginComponent**
El componente `LoginComponent` contiene un formulario con dos campos:
- **Email**: Validación reactiva para el formato del correo electrónico.
- **Contraseña**: Validación de longitud mínima de 8 caracteres.
- Al hacer clic en el botón de inicio de sesión, si el formulario es válido, se redirige a la página de éxito (`/success`).

### 2. **SuccessComponent**
El componente `SuccessComponent` muestra un mensaje de éxito con un GIF de confeti y un botón para generar más confeti en la pantalla mediante el uso de la librería `canvas-confetti`.

### 3. **InputComponent**
Un componente reutilizable para crear campos de entrada de formularios, que incluye validación y una vista para mostrar u ocultar contraseñas.

### 4. **ButtonComponent**
Un componente reutilizable para crear botones estilizados que permiten deshabilitarse, tener efectos de hover y manejar su estado.

## Funcionalidades

- **Navegación entre pantallas**: Se utiliza el sistema de enrutamiento de Angular para navegar entre la pantalla de login y la pantalla de éxito.
- **Validación de formularios**: Los campos del formulario de login (email y contraseña) son validados de manera reactiva.
- **GIF de éxito**: Al iniciar sesión con éxito, se muestra un GIF con confeti.
- **Confeti adicional**: Un botón permite activar un efecto adicional de confeti en la pantalla utilizando `canvas-confetti`.

## Instalación y Ejecución

### Requisitos
- Node.js (recomendado v18 o superior)
- Angular CLI

### Pasos

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/alicunde-prueba.git

2. **Instalar dependencias**:
   ```bash 
   cd alicunde-prueba
   npm install

3. **Iniciar la aplicación**:
   ```bash 
   npm start

### Estructura de rutas
- /login: Pantalla de inicio de sesión.
- /success: Pantalla de éxito con un GIF y un botón para mostrar más confeti.

### Estilos
Los estilos se gestionan principalmente en archivos .scss. Se utilizan variables para facilitar la personalización de los estilos.

- Desktop: 
![image](https://github.com/user-attachments/assets/e29533d4-90d8-4405-8198-da34fcb8009d)

Login - Validaciones del formulario:
![image](https://github.com/user-attachments/assets/af650711-3835-47a4-9d82-5de89d02b590)

Login - Campos correctos:
![image](https://github.com/user-attachments/assets/4d27e45f-fa4e-4107-afa9-67407254dd2e)

Success:
![image](https://github.com/user-attachments/assets/f26298aa-7745-4741-ae3e-4df2bc8f1af9)



