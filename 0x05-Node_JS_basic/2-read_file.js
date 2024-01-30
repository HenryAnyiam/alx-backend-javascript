/* eslint-disable */
const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf-8');
    data = data.trim();
    data = data.split('\n');
    let new_data = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
      	new_data[i] = data[i].split(',');
      }
    }
    let field = new_data[0].indexOf('field');
    let first_name = new_data[0].indexOf('firstname');
    let fields = {}
    let fieldname;
    for (let i = 1; i < new_data.length; i++) {
      fieldname = new_data[i][field]
      if (fields.hasOwnProperty(fieldname)) {
	fields[fieldname].push(new_data[i][first_name]);
      } else {
	fields[fieldname] = [new_data[i][first_name]];
      }
    }
    console.log("Number of students:", data.length - 1);
    for (let i in fields) {
      console.log(`Number of students in ${i.toUpperCase()}: ${fields[i].length}. LIST: ${fields[i].join(', ')}`);
    }
  } catch(err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
