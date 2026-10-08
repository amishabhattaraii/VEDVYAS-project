const mongoose = require('mongoose')

const performanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },

    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },

    attendance: {
        type: Number,
        required: true
    },

    previousExamScore: {
        type: Number,
        required: true
    },

    assignmentScore: {
        type: Number,
        required: true
    },

    finalExamScore: {
        type: Number
    },

    riskLevel: {
        type: String,
        enum: ['LOW', 'MEDIUM', 'HIGH']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Performance', performanceSchema)