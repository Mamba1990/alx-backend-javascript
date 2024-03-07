/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(stu) {
    if (!(stu instanceof Array)) {
      throw new TypeError('Students must be an array');
    }
    this._students = stu;
  }
}
