# Usa la imagen base de nginx
FROM nginx:alpine

# Elimina los archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia tu aplicación web a la ubicación correcta en nginx
COPY ./cronometro_app_web /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
