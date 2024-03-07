/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    if (typeof cd !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = cd;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
