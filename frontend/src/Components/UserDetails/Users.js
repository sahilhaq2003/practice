import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import User from '../User/User';
import { useReactToPrint } from 'react-to-print';
import './Users.css';

const URL = 'http://localhost:5000/users';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: 'User Report',
    onAfterPrint: () => alert('User Report Successfully Downloaded!'),
  });

  return (
    <div>
      <h1>User Details Page</h1>
      <div ref={ComponentsRef}>
        
        {users && users.length > 0 ? (
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))
        ) : (
          <div>No users to print</div>
        )}

      </div>
      <button className= "download-button" onClick={handlePrint}>Download Report</button>
    </div>
  );
}
export default Users;
