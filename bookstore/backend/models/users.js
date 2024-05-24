const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');



const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
 
});

userSchema.plugin(plm, { usernameField: 'username' }); // Specify the username field

module.exports = mongoose.model("User", userSchema);