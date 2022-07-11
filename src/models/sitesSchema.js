const mongoose = require('mongoose');

const parkSchema = mongoose.Schema({
    name: {
        type: String
    },
    number:{
        type: Number,
        required: true,
    },
    available: {
        type: Boolean
    },
});
module.exports = mongoose.model('parkSite', parkSchema);