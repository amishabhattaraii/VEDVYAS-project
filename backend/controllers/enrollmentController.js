const Enrollment = require('../models/Enrollment')

const createEnrollment = async (req, res) => {
    try {
        const {
            student,
            course
        } = req.body

        const existingEnrollment = await Enrollment.findOne({
            student,
            course
        })

        if (existingEnrollment) {
            return res.status(400).json({
                message: 'Student is already enrolled in this course'
            })
        }

        const enrollment = await Enrollment.create({
            student,
            course
        })

        res.status(201).json({
            message: 'Enrollment created successfully',
            enrollment
        })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to create enrollment',
            error: error.message
        })
    }
}

const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find()
            .populate('student', 'studentId program semester')
            .populate('course', 'courseCode courseName credits')

        res.json(enrollments)

    } catch (error) {
        res.status(500).json({
            message: 'Failed to get enrollments',
            error: error.message
        })
    }
}

module.exports = {
    createEnrollment,
    getEnrollments
}