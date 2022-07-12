const mongoose = require('mongoose');

const parkSchema = mongoose.Schema({
    name: {
        type: String
    },
    number:{
        type: Number,
        required: true,
    },
    avaliable: {
        type: Boolean
    },
    date: {
        type: Object
    }
});
module.exports = mongoose.model('parkSite', parkSchema);