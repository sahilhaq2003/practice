import './App.css';
import Home from "./Components/Home/Home";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import User from './Components/User/User';
import Users from './Components/UserDetails/Users';


function App() {
  return (
    <div>
      <Nav/>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<User/>} />
          <Route path="/userdetails" element={<Users/>} />
          
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
