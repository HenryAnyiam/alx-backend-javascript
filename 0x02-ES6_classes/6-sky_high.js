/* eslint-disable */
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = 0;

    this.floors = floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError("Floors must be a number");
    } else {
      this._floors = value;
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
