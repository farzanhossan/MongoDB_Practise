// const mongoose = require('mongoose');
import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    number: String,
    password: String
})

module.exports = mongoose.model('User', userSchema);