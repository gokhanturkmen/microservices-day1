
import express, { json } from 'express';
const app = express();
app.use(json());

const users = [{ id: 1, name: 'Ali' }, { id: 2, name: 'Ayşe' }];
const orders = [{ id: 101, userId: 1, item: 'Kalem' }, { id: 102, userId: 2, item: 'Defter' }];

app.get('/users', (req,res)=> res.json(users));
app.get('/orders', (req,res)=> res.json(orders));
app.get('/', (req,res)=> res.send('Monolith OK'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Monolith listening on ${port}`));
