const express = require('express');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/order', createOrder);

router.post('/order', (req, res) => {
    console.log("POST request received on /api/order");
    res.json({ message: 'Test response for POST /api/order' });
});

module.exports = router;

router.get('/test-order', (req, res) => {
    res.send("Order route working");
});
