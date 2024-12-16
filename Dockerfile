# Используем официальный Node.js образ
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер для статических файлов
RUN npm install -g serve

# Пробрасываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["serve", "-s", "build"]
