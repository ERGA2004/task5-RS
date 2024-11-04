const { listenForOrders } = require('./rabbit/rabbitListener');

listenForOrders().catch(console.error);
console.log('Notification Service is listening for orders...');
