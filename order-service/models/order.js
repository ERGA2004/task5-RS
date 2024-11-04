const mysql = require('mysql2/promise');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const pool = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
});

async function saveOrder(order) {
    const query = `INSERT INTO orders (restaurant, courier, foods, status, region) VALUES (?, ?, ?, ?, ?)`;
    await pool.query(query, [order.restaurant, order.courier, JSON.stringify(order.foods), order.status, order.region]);
}

module.exports = { saveOrder };
