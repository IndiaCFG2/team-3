const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const analyticsSchema = new Schema({
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

const Analytics = mongoose.model('Analytics', AnalyticsSchema);

module.exports = Analytics;