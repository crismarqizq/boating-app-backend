const { User } = require('../models')
const ObjectId = require('mongodb').ObjectId

async function updateUser(UserId, UserInfo) {
    console.log('Modify with', UserInfo)

    await User.findOneAndUpdate({ _id: new ObjectId(UserId) }, UserInfo, { new: true })
    return true
}

module.exports = updateUser