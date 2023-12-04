/* eslint-disable */

export default class Building {
  constructor(sqft) {
    this._sqft = 0;

    this.sqft = sqft;
    if (this.constructor.name !== 'Building') {
      this.evacuationWarningMessage();
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
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
