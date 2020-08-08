const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    board: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        required: true,
    },
    worksheet: {
        type: Number,
        required: true,
    },
    division: {
        type: Number,
        required: true,
    },
    fileURL: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;