import React from 'react'


function Register() {
  return (
    <div>
        
     <h1>Register Page</h1>

     <form>
        <label>Name</label><br></br>
        <input type="text" name="name" placeholder="Enter your name" required/><br></br>
        <label>Email</label><br></br>
        <input type="email" name="email" placeholder="Enter your email" required/><br></br>
        <label>Password</label><br></br>
        <input type="password" name="password" placeholder="Enter your password" required/><br></br>

        <button >Register</button>
      </form>
    </div>
  )
}

export default Register
