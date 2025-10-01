
// Repository (in-memory demo)
import { Order } from './entity.js';

const _db = new Map();

export class OrderRepository {
  async findById(id) { return _db.get(id) || null; }
  async save(order) { _db.set(order.id, order); return order; }
}

// Demo kullanım
async function demo(){
  const repo = new OrderRepository();
  const order = new Order('o-1');
  order.addLine('p-1', 2);
  await repo.save(order);
  console.log('Saved order lines:', (await repo.findById('o-1')).lines);
}
// demo();
