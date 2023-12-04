/* eslint-disable */
export default class Currency {
  constructor (code, name) {
    this._code = '';
    this._name = '';

    this.code = code;
    this.name = name;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError("Code must be a string");
    } else {
      this._code = value;
    }
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError("Name must be a string");
    } else {
      this._name = value;
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this.code})`;
  }
}