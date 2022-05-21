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

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new employee to the database
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

  return (
    <div className="container">
      <section className="d-flex flex-column flex-grow-1" style={{ "padding": "0px", "margin": "95px", "height": "initial", "margin-right": "55px", "margin-left": "55px", "margin-top": "2em" }}>
        <div className="justify-content-xl-start align-items-xl-start" style={{ "height": "inherit", "margin": "0px", "margin-top": "0", "padding-top": "5px" }}>
          <h1>Create New Employee</h1>
          <form onSubmit={onSubmit}>
            <div>
              <div className="row">
                <div className="col d-flex flex-column justify-content-lg-start" style={{ "padding-right": "30%", "padding-left": "30%", "padding-top": "1em" }}>
                  <input className="form-control"
                    type="email"
                    placeholder="Enter email"
                    value={form.employeeEmail}
                    onChange={(e) => updateForm({ employeeEmail: e.target.value })}
                    style={{
                      "margin-bottom": "1em", "max-width": "30rem", "min-width": "10rem"
                    }}
                    required
                    title="Please enter a valid email address, e.g. johndoe@company.com"
                    pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                  >
                  </input>
                  <input className="form-control"
                    type="text"
                    placeholder="Enter first name"
                    value={form.firstName}
                    onChange={(e) => updateForm({ firstName: e.target.value })}
                    required
                    pattern="^([A-Za-z\u0106-\u01C4]+([ ]?[a-z]?['-]?[A-Za-z\u0106-\u01C4]+)*)$"
                    style={{ "margin-bottom": "1em", "max-width": "30rem", "min-width": "10rem" }}>
                  </input>
                  <input className="form-control"
                    type="text"
                    placeholder="Enter last name"
                    value={form.lastName}
                    onChange={(e) => updateForm({ lastName: e.target.value })}
                    style={{ "margin-bottom": "1em", "max-width": "30rem", "min-width": "10rem" }}
                    required
                    pattern="^^([A-Za-z\u0106-\u01C4]+([ ]?[a-z]?['-]?[A-Za-z\u0106-\u01C4]+)*)$"
                  >
                  </input>
                  <select className="form-select"
                    value={form.gender}
                    onChange={(e) => updateForm({ gender: e.target.value })}
                    required
                    style={{ "margin-bottom": "1em", "max-width": "30rem", "min-width": "10rem", "border-color": "var(--bs-gray)" }}>
                    <option disabled value="">--Please select gender--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="preferNotToRespond">Prefer not to respond</option>
                  </select><button
                    className="btn"
                    type="submit"
                    style={{ "min-width": "10rem", "max-width": "30rem", "margin-bottom": "1em", "border-color": "var(--bs-orange)" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}