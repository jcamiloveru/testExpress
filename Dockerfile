# Usa una imagen base oficial de Node.js
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /user/src/app

# Copia los archivos de dependencias
COPY package.json ./
COPY pnpm-lock.yaml ./

# Instala pnpm y las dependencias
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copia el resto de la aplicación
COPY . .

# Expone el puerto de la app
EXPOSE $PORT

# Comando para iniciar la app
CMD ["pnpm", "start"]
