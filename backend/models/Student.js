const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },

    studentId: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        match: /^9\d{9}$/,
        message: 'Phone number must be exactly 10 digits and start with 9.'
    },

    address: {
        type: String
    },

    dateOfBirth: {
        type: Date,
        validate: {
            validator: function (value) {
                return !value || value <= new Date()
            },
            message: 'Date of birth cannot be in the future.'
        }
    },

    program: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        required: true,
        min: 1,
        max: 8,
        validate: {
            validator: Number.isInteger,
            message: 'Semester must be a whole number.'
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)