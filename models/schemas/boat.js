const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    regNumber: {
        type: String,
        required: true,
        unique: true
    },
    sail: {
        type: Boolean,
        required: true,

    },
    length: {
        type: Number,
        required: true,
    },
    beam: {
        type: Number,
        required: true,
    },
    draft: {
        type: Number,
        required: true,
    },

})