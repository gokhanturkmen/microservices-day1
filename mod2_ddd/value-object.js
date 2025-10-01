
// Value Object
export class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
    Object.freeze(this); // immutability
  }
  equals(other) {
    return other && this.amount === other.amount && this.currency === other.currency;
  }
}
