const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const analyticSchema = new Schema({
    school: {
        type: String,
        required: true,
    },
    lesson: {
        type: String,
        required: true,
    },
    numberOfClicks: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now()
    },
}, {
    timestamps: true,
});

const Analytic = mongoose.model('Analytic', AnalyticSchema);

module.exports = Analytic;