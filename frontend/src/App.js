import './App.css';
import Home from "./Components/Home/Home";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import AddUser from './Components/AddUser/AddUser';
import Users from './Components/UserDetails/Users';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login'; 

function App() {
  return (
    <div>
      <Nav/>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<AddUser/>} />
          <Route path="/userdetails" element={<Users/>} />
          <Route path="/regi" element={<Register/>} />
          <Route path="/userdetails/:id" element={<UpdateUser/>} />
          <Route path="/log" element={<Login/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
