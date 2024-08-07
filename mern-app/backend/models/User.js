const mongoose = require('mongoose');

const { Schema } =mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
}, {collection: 'UserInfo'});

module.exports = mongoose.model('UserInfo', UserSchema)