# CRM React TypeScript Project

Современная CRM система, построенная на React с TypeScript, Vite и Tailwind CSS.

## 🚀 Технологии

- **React 18** - современная библиотека для создания пользовательских интерфейсов
- **TypeScript** - типизированный JavaScript
- **Vite** - быстрый сборщик проектов
- **Tailwind CSS** - утилитарный CSS фреймворк
- **Lucide React** - красивые иконки

## 📁 Структура проекта

```
src/
├── components/     # React компоненты
│   ├── Analytics.tsx
│   ├── Dashboard.tsx
│   ├── ErrorMessage.tsx
│   ├── LoadingSpinner.tsx
│   ├── Sidebar.tsx
│   ├── Tickets.tsx
│   ├── UserProfile.tsx
│   └── Users.tsx
├── hooks/         # Пользовательские хуки
│   ├── useTickets.ts
│   └── useUsers.ts
├── services/      # API сервисы
│   ├── api.ts
│   ├── ticketService.ts
│   └── userService.ts
└── main.tsx       # Точка входа
```

## 🛠️ Установка и запуск

### Локальная разработка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/539493/CRM.git
cd CRM
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:5173](http://localhost:5173) в браузере

### Деплой на Render

1. Создайте аккаунт на [Render.com](https://render.com)
2. Подключите ваш GitHub репозиторий
3. Создайте новый **Static Site**
4. Настройте следующие параметры:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variables**: (если нужны)

## 📦 Доступные команды

- `npm run dev` - запуск сервера разработки
- `npm run build` - сборка для продакшена
- `npm run preview` - предварительный просмотр сборки
- `npm run lint` - проверка кода линтером

## 🌐 Деплой

Проект готов к деплою на:
- **Render** (рекомендуется)
- **Vercel**
- **Netlify**
- **GitHub Pages**

## 📝 Лицензия

MIT License
