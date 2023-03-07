const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
})

module.exports = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    coordinates: {
        type: [Number],
        required: true

    },
    address: {
        type: AddressSchema,
        required: true,

    },
    berths: {
        type: Number,
        required: true
    },
    VHF: {
        type: Number,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    facilities: {
        type: [String],
        required: true
    },
    imagePath: {
        type: [String],
        required: true
    }

})