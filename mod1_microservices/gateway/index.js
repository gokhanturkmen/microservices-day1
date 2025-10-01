
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();
app.use('/users', createProxyMiddleware({ target:'http://localhost:3001', changeOrigin:true }));
app.use('/orders', createProxyMiddleware({ target:'http://localhost:3002', changeOrigin:true }));
app.get('/', (req,res)=> res.send('Gateway OK'));
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Gateway on ${port}`));
