import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Employee = (props) => (
  <tr>
    <td>{props.employee.employeeEmail}</td>
    <td>{props.employee.firstName}</td>
    <td>{props.employee.lastName}</td>
    <td>{props.employee.gender}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.employee._id}`}>
        Edit
      </Link>{" "}
      |
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

  // This method fetches the employees from the database.
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

  // This method will delete a employee
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

  // This following section will display the table with the employees of individuals.
  return (
    <div>
      <h3>List of employees</h3>
      <Table hover className="table table-striped" style={{ marginTop: 50 }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{employeeList()}</tbody>
      </Table>
    </div>
  );
}
