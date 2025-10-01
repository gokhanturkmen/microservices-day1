
// Entity
export class Order {
  constructor(id) {
    this.id = id;
    this._lines = [];
  }
  addLine(productId, qty) {
    this._lines.push({ productId, qty });
    // Domain event örneği
    // DomainEvents.raise({ type:'OrderLineAdded', orderId:this.id, productId, qty });
  }
  get lines(){ return [...this._lines]; }
}
