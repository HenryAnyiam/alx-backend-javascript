/* eslint-disable */
export default function createIteratorObject(report) {
  const iterator = [];
  for (let property in report.allEmployees) {
    iterator.push(...report.allEmployees[property]);
  }
  return iterator;
}
