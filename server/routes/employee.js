const express = require("express");

// employeeRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /employee.
const employeeRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the employees.
employeeRoutes.route("/employee").get(function (req, res) {
  let db_connect = dbo.getDb("jacandoAG_assessment");
  db_connect
    .collection("employees")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single employee by id
employeeRoutes.route("/employee/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("employees")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new employee.
employeeRoutes.route("/employee/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    employeeEmail: req.body.employeeEmail,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
  };
  db_connect.collection("employees").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a employee by id.
employeeRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      employeeEmail: req.body.employeeEmail,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
    },
  }
});

// This section will help you delete a employee
employeeRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("employees").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = employeeRoutes;