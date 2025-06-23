import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateUser.css'; // Assuming you have a CSS file for styling  



function UpdateUser() {

    const [inputs, setInput] = useState({});
    const history = useNavigate();
    const id = useParams().id;


    useEffect(() => {
        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:5000/users/${id}`)
            .then((res)=> res.data)
            .then((data) => setInput(data.user));

        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios
        .put(`http://localhost:5000/users/${id}`, {
            name: String(inputs.name),
            email: String(inputs.email),
            phone: Number(inputs.phone),
            address: String(inputs.address),
        })
        .then((res) => res.data);
    };

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



  return (
    <div>
      <h1>Update User</h1>

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

export default UpdateUser
