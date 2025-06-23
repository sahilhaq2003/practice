import React from 'react'
import './User.css';


function User({ user }) {
  
  if (!user) {
    return <div>Loading user data...</div>;
  }

  const { _id, name, email, address, age } = user;
  return (
    <div className="user-card">
      <h2>User Display</h2>
      <h2>ID : {_id}</h2>
      <h2>Name : {name}</h2>
      <h2>Email : {email}</h2>
      <h2>Age : {age}</h2>
      <h2>Address : {address}</h2>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}
export default User
