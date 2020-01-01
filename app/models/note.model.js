const mongoose = require("mongoose");

//Create schema for CRUD operations
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    Roll: {
        type: String,
        required: [true, "Please enter an roll number"]
    },
    Session: {
        type: String,
        required: [true, "Please enter a session number"]
    }
});

//craete model
const User = mongoose.model("User", userSchema);

//export User
module.exports = User;