import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    employeeEmail: "",
    firstName: "",
    lastName: "",
    gender: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new employee to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/employee/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ employeeEmail: "", firstName: "", lastName: "", gender: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Employee</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="employeeEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="employeeEmail"
            value={form.employeeEmail}
            onChange={(e) => updateForm({ employeeEmail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check ">
            <label for="gender-select">Gender:</label>

            <select name="genders" id="gender-select">
              <option value="">-- Please select gender --</option>
              <option
                value={form.gender}
                name="male"
                id="male"
                onChange={(e) => updateForm({ gender: e.target.value })}
              >
                Male
              </option>
              <option
                value={form.gender}
                name="female"
                id="female"
                onChange={(e) => updateForm({ gender: e.target.value })}
              >
                Female
              </option>
              <option
                value={form.gender}
                name="preferNotToRespond"
                id="preferNotToRespond"
                onChange={(e) => updateForm({ gender: e.target.value })}
              >
                Prefer not to respond
              </option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create employee"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
