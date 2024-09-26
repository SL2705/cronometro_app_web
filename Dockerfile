# Usa la imagen base de nginx
FROM nginx:alpine

# Copia tu aplicación web a la ubicación correcta en nginx
COPY ./CronometroAPPWeb /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
