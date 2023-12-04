/* eslint-disable */
export default function getStudentIdsSum(array) {
  if (!(array instanceof Array)) {
    return 0;
  }

  const initialValue = 0;
  const sumOfIds = array.reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue,);

  return sumOfIds;
}
