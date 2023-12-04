/* eslint-disable */
export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array) && set instanceof Set) {
    for (let value of array) {
      if (!(set.has(value))) {
        return false;
      }
    }
    return true;
  }
}
