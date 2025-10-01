
const amqp = require('amqplib');

async function publish(){
  const conn = await amqp.connect('amqp://localhost');
  const ch   = await conn.createChannel();
  const ex   = 'events';
  await ch.assertExchange(ex, 'fanout', { durable:false });
  const msg = JSON.stringify({ type:'user.created', data:{ id: 1, name:'Ali' } });
  ch.publish(ex, '', Buffer.from(msg));
  console.log('Event published:', msg);
  setTimeout(()=> conn.close(), 500);
}
publish().catch(console.error);
