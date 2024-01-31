/* eslint-disable */
const http = require("http");
const fs = require('fs');


const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    fs.readFile(process.argv[2], 'utf-8', (err, data) => {
      if (err) {
	res.statusCode = 404;
        res.end("Cannot load the database");
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
	res.write("This is the list of our students\n");
	res.write(`Number of students: ${data.length - 1}\n`);
	let dic_len = Object.keys(fields).length;
	let j = 0;
        for (let i in fields) {
          if (i) {
            let stu = fields[i].join(', ');
            let len = fields[i].length;
            res.write(`Number of students in ${i}: ${len}. List: ${stu}`);
	    if (j < dic_len - 1) {
	      res.write("\n");
	    }
          }
	  j++;
	}
	res.end();
      }
    });
  }
});

app.listen(1245, () => {
    console.log("Server is listening on port 1245");
});

module.exports = app;
