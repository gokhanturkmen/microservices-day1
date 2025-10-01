
import express from 'express';
const app = express();
app.get('/users', (req,res)=> res.json([{ id: 1, name: 'Ali' }, { id: 2, name: 'Ayşe' }]));
app.get('/', (req,res)=> res.send('Users OK'));
const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Users service on ${port}`));
