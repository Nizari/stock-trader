export default class StockRecord {
  public quantity?: number;

  constructor(public title: string, quantity?: number) {
    if (quantity) {
      this.quantity = quantity;
    }
  }
}
