const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: {
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('usuario', userSchema);

module.exports = User;