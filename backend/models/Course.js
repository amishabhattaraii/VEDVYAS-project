const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true,
        unique: true
    },

    courseName: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    credits: {
        type: Number,
        required: true
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },

    program: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        required: true
    },

    capacity: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', courseSchema)