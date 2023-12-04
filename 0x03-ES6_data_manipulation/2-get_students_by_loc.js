/* eslint-disable */
export default function getStudentsByLocation(array, city) {
  if (!(array instanceof Array)) {
    return [];
  }
  const newArray = array.filter((x) => x.location === city);
  return newArray;
}
