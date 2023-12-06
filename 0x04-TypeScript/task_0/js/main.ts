/* eslint-disable */

interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

const student1 : Student = {
  firstName: "Henry",
  lastName: "Lex",
  age: 25,
  location: "Nigeria"};

const student2 : Student = {
  firstName: "Henry",
  lastName: "Lex",
  age: 25,
  location: "Nigeria"
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const tableBody = document.getElementById('tableBody');

  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
}
