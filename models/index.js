const mongoose = require('mongoose')
const model = mongoose.model

const userSchema = require('./schemas/user')
const boatSchema = require('./schemas/boat')
const portSchema = require('./schemas/port')
const bookingSchema = require('./schemas/booking')


const User = model('User', userSchema)
const Boat = model('Boat', boatSchema)
const Port = model('Port', portSchema)
const Booking = model('Booking', bookingSchema)


module.exports = {
    User,
    Boat,
    Port,
    Booking
}
