# Usa la imagen oficial de Node.js LTS como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y dependencias del backend
COPY package*.json ./
RUN npm install

# Copia el código fuente del backend
COPY . .

# Exponer el puerto en el que se ejecuta la aplicación Express
EXPOSE 8000

# Comando para iniciar el servidor Express
CMD ["node", "server.js"]
