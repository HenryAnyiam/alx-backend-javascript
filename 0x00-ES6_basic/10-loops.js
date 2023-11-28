/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  const new_array = []
  for (let val of array) {
    let value = appendString + val;
    new_array.push(value);
  }

  return new_array;
}
