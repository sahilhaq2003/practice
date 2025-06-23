import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AddUser.css';
import axios from 'axios';

function AddUser() {
    const history = useNavigate();
    const [inputs, setInput] = React.useState({
        name: "",
        email: "",
        age: "",
        address: ""
        
    });

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/userdetails"));
    }

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/users", {
            name: String(inputs.name),
            email: String(inputs.email),
            age: Number(inputs.age),
            address: String(inputs.address)
        }).then(res => res.data)
    }
        

  return (
    <div className ="add-user-container">
      <h1>Add user</h1>
      <form onSubmit={handleSubmit} className="add-user-form">
      <label>
      Name:
      <input type="text" name="name" onChange={handleChange} value={inputs.name} required />
      </label><br />

      <label>
       Email:
       <input type="email" name="email" onChange={handleChange} value={inputs.email} required />
      </label><br />

      <label>
      Age:
      <input type="number" name="age" onChange={handleChange}  value={inputs.age} required />
      </label><br />

      <label>
      Address:
      <input type="text" name="address" onChange={handleChange} value={inputs.address} required />
      </label><br />

      <button type="submit">Submit</button>
    </form>  
    </div>
  )
}

export default AddUser
