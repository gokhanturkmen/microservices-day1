
# Modül 3 – Event-Driven Demo

## RabbitMQ Başlatma
```bash
docker compose up -d
# UI: http://localhost:15672  (guest/guest)
```

## Publisher & Consumer
```bash
npm i
node consumer.js
node publisher.js
```

## Basit Event Sourcing
```bash
node event_sourcing_demo.js
```
