
const amqp = require('amqplib');

async function consume(){
  const conn = await amqp.connect('amqp://localhost');
  const ch   = await conn.createChannel();
  const ex   = 'events';
  await ch.assertExchange(ex, 'fanout', { durable:false });
  const q = await ch.assertQueue('', { exclusive:true });
  await ch.bindQueue(q.queue, ex, '');
  console.log('Waiting for events...');
  ch.consume(q.queue, msg => {
    const e = JSON.parse(msg.content.toString());
    console.log('Event received:', e);
  }, { noAck:true });
}
consume().catch(console.error);
