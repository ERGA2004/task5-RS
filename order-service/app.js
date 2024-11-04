const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes'); // Убедитесь, что путь к файлу правильный
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Подключаем маршруты с префиксом '/api'
app.use('/api', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
