/* eslint-disable no-plusplus */
export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let nextIdx = 0;
      const employeesArray = [];
      for (const dept of Object.values(report.allEmployees)) {
        employeesArray.push(...dept);
      }
      return {
        next() {
          return nextIdx < employeesArray.length
            ? { value: employeesArray[nextIdx++], done: false }
            : { done: true };
        },
      };
    },
  };
}
