
# Modül 1 – Mikroservis Minimal Demo

## Çalıştırma
Terminal(ler) açıp aşağıdaki sırayla çalıştırın:

```bash
cd monolith && npm i && node server.js           # Monolit (opsiyonel)
cd ../users-service && npm i && node index.js    # 3001
cd ../orders-service && npm i && node index.js   # 3002
cd ../gateway && npm i && node index.js          # 3000
```

### Test
- http://localhost:3000/users
- http://localhost:3000/orders
