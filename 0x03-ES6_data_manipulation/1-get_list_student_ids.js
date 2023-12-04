/* eslint-disable */
export default function getListStudentIds(array) {
  if (!(array instanceof Array)) {
    return []
  }
  const newArray = array.map((x) => x.id);
  return newArray;
}
