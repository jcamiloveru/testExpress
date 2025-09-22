# testExpress

Una aplicación de ejemplo de Express.js con autenticación básica y soporte para Docker.

## Descripción

Esta aplicación es un servidor Express.js simple que expone dos endpoints: uno para una ruta raíz que devuelve un saludo y otro para una autenticación de usuario básica. Está configurada para ser fácilmente desplegable usando Docker.

## Tecnologías Utilizadas

*   **Node.js**: Entorno de ejecución de JavaScript.
*   **Express.js**: Framework web para Node.js.
*   **Cors**: Middleware para habilitar Cross-Origin Resource Sharing.
*   **Dotenv**: Para cargar variables de entorno desde un archivo `.env`.
*   **pnpm**: Administrador de paquetes rápido y eficiente.
*   **Docker**: Para la contenerización de la aplicación.

## Instalación Local

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/jcamiloveru/testExpress.git
    cd testExpress
    ```

2.  **Instalar dependencias**:
    Asegúrate de tener `pnpm` instalado globalmente (`npm install -g pnpm`).
    ```bash
    pnpm install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`.
    ```
    PORT=3000
    ```

## Uso Local

Para iniciar la aplicación localmente:

```bash
pnpm start
```

El servidor se ejecutará en `http://localhost:3000` (o el puerto que hayas configurado en tu archivo `.env`).

## Docker

Puedes construir y ejecutar esta aplicación usando Docker para un entorno consistente:

1.  **Construir la imagen Docker**:
    ```bash
    docker build -t testexpress .
    ```

2.  **Ejecutar el contenedor Docker**:
    ```bash
    docker run -p 3000:3000 testexpress
    ```
    Esto mapeará el puerto 3000 del contenedor al puerto 3000 de tu máquina local. La aplicación dentro del contenedor usará la variable de entorno `PORT` (que por defecto es 3000 en el `Dockerfile`).

## Endpoints de la API

La aplicación expone los siguientes endpoints:

*   **`GET /`**
    *   **Descripción**: Retorna un mensaje de saludo.
    *   **Respuesta**: `Hola`

*   **`POST /login`**
    *   **Descripción**: Autentica a un usuario con un nombre de usuario y contraseña.
    *   **Request Body**:
        ```json
        {
          "username": "admin",
          "password": "0000"
        }
        ```
    *   **Respuestas**:
        *   `200 OK`: `Login successful` (si las credenciales son `admin`/`0000`)
        *   `401 Unauthorized`: `Invalid credentials` (si las credenciales son incorrectas)

## Ejemplo de Uso (con `curl`)

Para probar el endpoint `/login`:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "admin", "password": "0000"}' http://localhost:3000/login
