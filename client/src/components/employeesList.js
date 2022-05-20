import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Table from "react-bootstrap/Table";

const Employee = (props) => (
  <tr>
    <td>{props.employee.employeeEmail}</td>
    <td>{props.employee.firstName}</td>
    <td>{props.employee.lastName}</td>
    <td>{props.employee.gender}</td>
    <td>
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteEmployee(props.employee._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);


  // This method fetches the employees from the database
  useEffect(() => {
    async function getEmployees() {
      const response = await fetch(`http://localhost:5000/employee/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const employees = await response.json();
      setEmployees(employees);
    }

    getEmployees();

    return;
  }, [employees.length]);

  // This method will delete an employee
  async function deleteEmployee(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newEmployees = employees.filter((el) => el._id !== id);
    setEmployees(newEmployees);
  }

  // This method will map out the employees on the table
  function employeeList() {
    return employees.map((employee) => {
      return (
        <Employee
          employee={employee}
          deleteEmployee={() => deleteEmployee(employee._id)}
          key={employee._id}
        />
      );
    });
  }

  return (
    <div className="container">
      <section className="d-flex flex-column flex-grow-1" style={{ "padding": "0px", "margin": "95px", "height": "initial", "margin-right": "55px", "margin-left": "55px", "margin-top": "100px" }}>
        <h1 className="d-flex float-start" style={{ "color": "#01273e", "padding-top": "5px", "padding-bottom": "0px" }}>List of employees</h1>
        <div className="table-responsive" style={{ "padding": "0px", "padding-top": "20px", "padding-right": "0px", "color": "#01273e" }}>
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{employeeList()}</tbody>
          </table>
        </div>
        <div className="justify-content-xl-start align-items-xl-start"
          style={{ "height": "inherit", "margin": "0px", "margin-top": "0", "padding-top": "56px" }}></div>
      </section>
    </div>
  );
}
