const express = require("express");
const employeeRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config({ path: "./.env" });

const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
const MONGODB_COLLECTION = process.env.MONGODB_COLLECTION


employeeRoutes.route("/employee").get(function (req, res) {
  let db_connect = dbo.getDb(MONGODB_DATABASE);
  db_connect
    .collection(MONGODB_COLLECTION)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

employeeRoutes.route("/employee/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection(MONGODB_COLLECTION)
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// create a new employee
employeeRoutes.route("/employee/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    employeeEmail: req.body.employeeEmail,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
  };
  db_connect.collection(MONGODB_COLLECTION).insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

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

// delete an employee
employeeRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection(MONGODB_COLLECTION).deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = employeeRoutes;