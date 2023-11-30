const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    userName: String,
    password: String
});

module.exports = mongoose.model('users', userSchema);