const User =require("../Models/UserModel");

const getAllUsers = async (req, res,next) => {
    let Users;

    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({users});
};

//data insert

const addUser = async (req, res, next) => {
    const { name, email, age,address } = req.body;

    let users

    try{
        users = new User({name,email,age,address});
        await users.save();
        
    }catch(err){
        console.log(err);
    }

    if (!users) {
        return res.status(500).json({ message: "Unable to add user" });
    }

    return res.status(200).json({users});
}

//get by ID
const getbyId = async (req, res, next) => {
    const id = req.params.id;

    let user;
    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(404).json({ message: "No user found" });
    }

    return res.status(200).json({ user });
}
// Update user by ID
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, age, address } = req.body;

    let users;
    try {
        users = await User.findByIdAndUpdate(id,     
            { name:name, email:email, age:age, address:address });
            users =await users.save();
    }catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "Unable to update user by this ID" });
    }
    return res.status(200).json({ users });
}
//Delete user by ID
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user= await User.findByIdAndDelete(id);
    }catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "Unable to delete user by this ID" });
    }
    return res.status(200).json({ message: "User successfully deleted" });

}

exports.addUser = addUser;
exports.getAllUsers = getAllUsers;    
exports.getbyId = getbyId;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
