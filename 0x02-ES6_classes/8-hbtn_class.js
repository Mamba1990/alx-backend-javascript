/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(s) {
    if (typeof s !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = s;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return this.size;
      case 'string':
        return this.location;
      default:
        return `HolbertonClass ${this.location}`;
    }
  }
}
