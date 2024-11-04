const amqplib = require('amqplib');
const rabbitmqUrl = process.env.RABBITMQ_URL;

async function createChannel() {
    const connection = await amqplib.connect(rabbitmqUrl);
    return connection.createChannel();
}

module.exports = createChannel;
