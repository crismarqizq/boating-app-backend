const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = new Schema({

    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    port: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Port',
        required: true
    },
    boat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boat',
        required: true
    },

})