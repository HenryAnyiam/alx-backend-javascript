/* eslint-disable */
export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!(Array.isArray(array))) {
    return [];
  }

  const newArray = array.filter((x) => x.location === city);

  function Upgrade(currVal) {
    const grade = newGrades.filter((x) => x.studentId === currVal.id)
    if (grade.length == 0) {
      currVal.grade = 'N/A';
    } else {
      currVal.grade = grade[0].grade;
    }
    return currVal;
  }

  const finalArray = newArray.map(Upgrade);

  return finalArray;
}
