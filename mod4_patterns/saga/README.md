
# Saga Orchestration – Basit Taslak (Eğitsel)

Bu klasör, ders sırasında anlatılan *Saga (Choreography/Orchestration)* kavramı için basit bir iskelet içerir.
Tam işleyen bir demo yerine, adımların nasıl modellenebileceğini gösterir.

## Akış
1. `OrderCreated` olayı
2. Ödeme isteği (`PaymentRequest`) → `PaymentSucceeded` / `PaymentFailed`
3. Stok rezervasyonu (`InventoryReserve`) → `InventoryReserved` / `InventoryFailed`
4. Hata durumunda kompansasyon olayları (`OrderCancelled`, `RefundIssued`)

> İlerleyen safhalarda Kafka/RabbitMQ ile tam demo eklenebilir.
