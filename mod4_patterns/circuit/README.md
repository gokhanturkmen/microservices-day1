
# Circuit Breaker Demo

## Adımlar
```bash
npm i
node slow-service.js            # 4000 portunda yavaş servis
node client-breaker.js          # circuit breaker istemcisi
```

### Davranışı Gözlemleme
- `client-breaker.js` 1s timeout ile çağrı yapar.
- Varsayılan gecikme 1500ms => Fail -> Circuit açılır -> fallback döner.
- 5s sonra Half-Open, birkaç başarılı denemede Close olur.

Opsiyonel: Gecikmeyi düşürmek için
```bash
curl -XPOST -H "Content-Type: application/json" \
  -d '{"delayMs":200}' http://localhost:4000/configure
```
