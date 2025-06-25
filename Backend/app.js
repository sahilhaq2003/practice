const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/UserRoutes');

const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors())
app.use("/users", userRoutes);


// MongoDB connection
mongoose.connect("mongodb+srv://admin:cm8tMswD4Nbbp6w6@cluster0.6s6wqoz.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));

//call register model
require('./Models/Register');
//call login model
const User =mongoose.model('Register');
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try{
    await User.create({
       name, email, password
      
      });
      res.send({status : "ok", message: "User registered successfully"});
  }catch(err){
    res.send({status: "error", error: "User already exists"});
  }


});


//Login

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try{
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({error: "User Not Found" });
    }
    if (user.password === password) {
      return res.json({status: "ok", message: "User login successful" });
    }else{
      return res.json({status: "error", error: "Invalid credentials" });
    }

  }catch(err){
    console.error(err);
    res.status(500).json({status: "error", error: "Internal Server Error" });
  }
 
    
});
