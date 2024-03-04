/* eslint-disable no-unused-vars */
export default function iterateThroughObject(reportWithIterator) {
  let res = '';

  for (const person of reportWithIterator) {
    res += person;
    res += ' | ';
  }
  res = res.substring(0, res.length - 3);

  return res;
}
