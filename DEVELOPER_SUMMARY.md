# 🚀 CRM API - Сводка для разработчика

## 🔑 API Ключ
```
crm_539493_2024_auth_token_secure_key
```

## 🌐 Базовый URL
```
https://crm-q4vk.onrender.com/api
```

## 📋 Основные endpoints

### Пользователи
- `POST /api/users` - Создание пользователя
- `GET /api/users` - Получение списка пользователей
- `GET /api/users/{id}` - Получение пользователя по ID
- `PUT /api/users/{id}` - Обновление пользователя
- `PUT /api/users/{id}/status` - Изменение статуса

### Тикеты
- `POST /api/tickets` - Создание тикета
- `GET /api/tickets` - Получение списка тикетов
- `PUT /api/tickets/{id}/status` - Изменение статуса тикета
- `PUT /api/tickets/{id}/assign` - Назначение тикета

### Статистика
- `GET /api/users/stats` - Статистика пользователей
- `GET /api/tickets/stats` - Статистика тикетов

## 🔧 Пример интеграции

```javascript
const API_KEY = 'crm_539493_2024_auth_token_secure_key';
const BASE_URL = 'https://crm-q4vk.onrender.com/api';

// Создание пользователя
async function createUser(userData) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return response.json();
}

// Пример использования
createUser({
  name: "Иван Петров",
  email: "ivan@example.com",
  type: "student",
  phone: "+7 (999) 123-45-67",
  subjects: ["Математика"],
  joinDate: "2024-08-01"
});
```

## �� Контакты
- Email: support@crm-system.com
- Документация: API_DOCUMENTATION.md
- Тестовые данные: TEST_DATA.md
