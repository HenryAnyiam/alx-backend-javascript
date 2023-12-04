/* eslint-disable */

export default class Building {
  constructor(sqft) {
    this._sqft = 0;

    this.sqft = sqft;
    if (this.constructor.name !== 'Building') {
      if (this.evacuationWarningMessage === undefined || this.evacuationWarningMessage !== 'function') {
        throw new Error("Class extending Building must override evacuationWarningMessage");
      }
    }
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError("Sqft must be a number");
    } else {
      this._sqft = value;
    }
  }

  get sqft() {
    return this.sqft;
  }
}
