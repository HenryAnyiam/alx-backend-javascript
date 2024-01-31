/* eslint-disable */
const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
    .then((data) => {
      res.write("This is the list of our students\n");
      // const lowercaseKeys = Object.keys(data).map((key) => key.toLowerCase());
      // const sortedLowercaseKeys = lowercaseKeys.sort();
      // const sortedDictionary = {};
      // sortedLowercaseKeys.forEach((key) => {
	    //   sortedDictionary[key] = data[key];
      // });
      let dic_len = Object.keys(data).length;
      let j = 0;
      for (let i in data) {
        if (i) {
            let stu = data[i].join(', ');
            let len = data[i].length;
            res.write(`Number of students in ${i}: ${len}. List: ${stu}`);
            if (j < dic_len - 1) {
              res.write("\n");
            }
          }
          j++;
        }
        res.send();
    })
    .catch((err) => {
      res.status(500).send("Cannot load the database");
    });
  }

  static getAllStudentsByMajor(req, res) {
    let major = req.params.major;
    if (major !== "CS" && major !== "SWE") {
      res.status(500).send("Major parameter must be CS or SWE");
    } else {
      readDatabase(process.argv[2])
      .then((data) => {
        let students = data[major];
        let stu = students.join(', ');
        let len = students.length;
        res.write(`Number of students in ${major}: ${len}. List: ${stu}`);
        res.send();
      })
      .catch((err) => {
        res.status(500).send("Cannot load the database");
      });
    }
  }
}

module.exports = StudentsController; 
