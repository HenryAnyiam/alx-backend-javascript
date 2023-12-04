/* eslint-disable */
import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = '';
    this._currency = '';

    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError("Amount must be a number");
    } else {
      this._amount = value;
    }
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError("Currency must be a currency");
    } else {
      this._currency = value;
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  } 
}
