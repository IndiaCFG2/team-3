const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    board: {
        type: String,
        required: true,
    },
    totalTeachers: {
        type: Number,
        required: true,
    },
    totalStudents: {
        type: Number,
        required: true,
    },
    regDate: {
        type: Date,
        default: Date.now()
    },
}, {
    timestamps: true,
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;