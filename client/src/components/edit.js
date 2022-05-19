import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    employees: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/employee/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const employee = await response.json();
      if (!employee) {
        window.alert(`Employee with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(employee);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      firstName: form.firstName,
      lastName: form.lastName,
      employeeEmail: form.employeeEmail,
      gender: form.gender,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Employee</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeEmail">Position: </label>
          <input
            type="text"
            className="form-control"
            id="employeeEmail"
            value={form.employeeEmail}
            onChange={(e) => updateForm({ employeeEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender: </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            value={form.gender}
            onChange={(e) => updateForm({ gender: e.target.value })}
          />
        </div>

        {/* <div className="form-group">
          <div className="form-check ">
            <label for="gender-select">Gender:</label>

            <select name="genders" id="gender-select">
              <option value="">-- Please select gender --</option>
              <option
                value="male"
                checked={form.gender === "Male"}
                onChange={(e) => updateForm({ gender: e.target.value })}
              >
                Male
              </option>
              <option
                value="female"
                name="positionOptions"
                id="positionSenior"
                checked={form.gender === "Female"}
                onChange={(e) => updateForm({ gender: e.target.value })}
              >
                Female
              </option>
              <option
                value="null"
                name="positionOptions"
                id="positionIntern"
                checked={form.gender === "NotSelected"}
                onChange={(e) => updateForm({ gender: e.target.value })}
              >
                Prefer not to respond
              </option>
            </select>
          </div>
        </div> */}

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Employee"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
