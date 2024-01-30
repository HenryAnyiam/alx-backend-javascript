/* eslint-disable */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
	reject(new Error('Cannot load the database'));
      } else {
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
      let fields = {};
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
	if (i) {
	  let stu = fields[i].join(', ');
	  let len = fields[i].length;
	  console.log(`Number of students in ${i}: ${len}. List: ${stu}`);
	}
      }
      resolve();
      }
    });
  })
}

module.exports = countStudents;
