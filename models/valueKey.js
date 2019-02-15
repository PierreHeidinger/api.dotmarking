const mongoose = require('mongoose')

const ValueKey = new mongoose.Schema({

    key : {
        type : String,
        required : true
    },
    language :{
        type: String,
        required : true
    },
    value : {
        type : Object
    }
    
});

module.exports = mongoose.model('valuekeys',ValueKey)