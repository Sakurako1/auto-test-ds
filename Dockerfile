# Базовый образ с установленным Cypress и браузерами
FROM cypress/included:13.6.2

# Указываем рабочую папку внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# По умолчанию запускаем Cypress тесты
CMD ["npx", "cypress", "run", "--reporter", "spec"]
