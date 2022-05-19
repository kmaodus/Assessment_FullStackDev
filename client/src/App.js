import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import EmployeesList from "./components/employeesList";
import Edit from "./components/edit";
import Create from "./components/create";
// import Footer from "./components/Footer";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<EmployeesList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
     {/* <Footer /> */}
   </div>
 );
};
 
export default App;
