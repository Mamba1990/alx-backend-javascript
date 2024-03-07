import Currency from './3-currency';

/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(am) {
    if (typeof am !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = am;
  }

  get currency() {
    return this._currency;
  }

  set currency(curr) {
    if (!(curr instanceof Currency)) {
      throw new TypeError('Currency must be a currency');
    }
    this._currency = curr;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
