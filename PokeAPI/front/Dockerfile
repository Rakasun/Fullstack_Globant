# Utiliza una imagen oficial de Node.js como base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código del frontend al contenedor
COPY . .

# Expone el puerto 3000 para que el contenedor sea accesible desde fuera
EXPOSE 3000

# Ejecuta la aplicación
CMD ["npm", "start"]
