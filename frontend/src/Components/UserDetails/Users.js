import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../User/User';
const URL = 'http://localhost:5000/users';


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);


  return (
    <div>
      <h1>User Details Page</h1>
      <div>
        {users && users.map((user, i) => (
          <div key={i}>
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
