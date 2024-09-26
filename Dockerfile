# Usa la imagen base de Nginx
FROM nginx:alpine

# Copia los archivos de tu aplicación web al directorio por defecto de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación esté disponible
EXPOSE 80
