const createChannel = require('../rabbit/rabbitConnection');

async function createOrder(req, res) {
    const order = req.body;
    const channel = await createChannel();
    const exchangeName = 'order-topic-exchange';

    await channel.assertExchange(exchangeName, 'topic', { durable: false });
    const routingKey = `order.${order.region}`;

    channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(order)));
    console.log("Received request to create order:", req.body);
    res.json({ message: 'Order created and sent to RabbitMQ' });
}

module.exports = { createOrder };

