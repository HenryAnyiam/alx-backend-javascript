/* eslint-disable */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = 0;
    this._location = '';

    this.size = size;
    this.location = location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError("Size must be a number");
    } else {
      this._size = value;
    }
  }

  get size() {
    return this._size;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError("Location must be a string");
    } else {
      this._location = value;
    }
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'string') {
      return this._location;
    } else if (cast === 'number') {
      return this._size;
    }
  }
}
