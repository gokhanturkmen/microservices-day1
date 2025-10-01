
import express from 'express';

const app = express();
let delayMs = 1500;
app.get('/slow', async (req,res) => {
  await new Promise(r => setTimeout(r, delayMs));
  res.json({ ok:true, delayMs });
});

app.get('/health', (req,res)=> res.send('OK'));
app.post('/configure', express.json(), (req,res)=> {
  delayMs = Number(req.body.delayMs || delayMs);
  res.json({ delayMs });
});

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Slow service on ${port}, delay=${delayMs}ms`));
