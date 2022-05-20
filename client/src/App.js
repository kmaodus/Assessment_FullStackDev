import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar";
import EmployeesList from "./components/EmployeesList";
import Create from "./components/Create";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<EmployeesList />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
