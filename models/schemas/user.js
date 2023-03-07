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
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    idNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    contactNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: AddressSchema,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }

})