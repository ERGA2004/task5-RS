const amqplib = require('amqplib');
require('dotenv').config();

async function listenForOrders() {
    const connection = await amqplib.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    const exchangeName = 'order-topic-exchange';

    await channel.assertExchange(exchangeName, 'topic', { durable: false });

    const regions = ['almaty', 'astana'];
    for (const region of regions) {
        const queueName = `order_${region}`;
        await channel.assertQueue(queueName, { durable: false });
        channel.bindQueue(queueName, exchangeName, `order.${region}`);
        channel.consume(queueName, (msg) => {
            console.log(`Received in ${region}: ${msg.content.toString()}`);
            channel.ack(msg);
        });
    }
}

module.exports = { listenForOrders };
