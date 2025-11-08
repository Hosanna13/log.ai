const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');


const noteSchema = new mongoose.Schema({
    userId: { type: ObjectId, required: false, ref: "User" },
    content: { type: String, required: true },
    tags: [{ type: String }],
}, {timestamps: true});

module.exports = mongoose.model('Note', noteSchema);