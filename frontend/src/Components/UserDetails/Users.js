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

  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  }

  const handleSendReport = () => {

    const phoneNumber = "+94767589002";
    const message = `selected User Reports`
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)

    }`;
    window.open(WhatsAppUrl, '_blank');
  }

  return (
    <div>
      <h1>User Details Page</h1>
      <input onChange ={(e) => setSearchQuery(e.target.value)}
        type ="text" 
        name ="search"
        placeholder="Search Users Details">
      </input>
      <button onClick={handleSearch}>Search</button>

      {
        noResults ? (
          <div>
            <p>No user Found</p>
          </div>
        ) :(
      

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

      )}

      <button className= "download-button" onClick={handlePrint}>Download Report</button>
      <button className="whatsapp-button" onClick={handleSendReport}>Send Report via WhatsApp</button>
    </div>
  );
}
export default Users;
