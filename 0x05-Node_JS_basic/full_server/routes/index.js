/* eslint-disable */
const AppController = require("../controllers/AppController");
const StudentsController = require("../controllers/StudentsController");
const express = require("express");

const app = express.Router();

app.get("/", AppController.getHomePage);
app.get("/students", StudentsController.getAllStudents);
app.get("/students/:major", StudentsController.getAllStudentsByMajor);

module.exports = app;
