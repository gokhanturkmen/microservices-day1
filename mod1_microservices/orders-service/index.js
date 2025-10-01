
import express from 'express';
const app = express();
const orders = [{ id: 101, userId: 1, item: 'Kalem' }, { id: 102, userId: 1, item: 'Silgi' }];
app.get('/orders', (req,res)=> res.json(orders));
app.get('/', (req,res)=> res.send('Orders OK'));
const port = process.env.PORT || 3002;
app.listen(port, ()=> console.log(`Orders service on ${port}`));
