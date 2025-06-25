import React from 'react'
import './User.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function User({ user }) {
  const { _id, name, email, address, age } = user;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(res => res.data)
      .then(() => window.location.reload());
  }

  return (
    <div className="user-card">
      <h2>User Display</h2>
      <h2>ID : {_id}</h2>
      <h2>Name : {name}</h2>
      <h2>Email : {email}</h2>
      <h2>Age : {age}</h2>
      <h2>Address : {address}</h2>
      <Link to={`/userdetails/${_id}`}>
        <button>Update</button>
      </Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default User

