# Используем официальный образ Nginx
FROM nginx:latest

# Удаляем стандартную конфигурацию Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем собственную конфигурацию
COPY nginx.conf /etc/nginx/conf.d/

# Копируем статические файлы React в Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Указываем порт для работы Nginx
EXPOSE 80
