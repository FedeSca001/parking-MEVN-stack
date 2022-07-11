const mongoose = require('mongoose');

const userSchem = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    dni: {
        type: Number
    },
    phone: {
        type: Number
    },
    mail: {
        type: String
    }
})
module.exports = mongoose.model('userSchem', userSchem);
