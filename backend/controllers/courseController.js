const Course = require('../models/Course')

const createCourse = async (req, res) => {
    try {
        const {
            courseCode,
            courseName,
            description,
            credits,
            teacher,
            program,
            semester,
            capacity
        } = req.body

        const existingCourse = await Course.findOne({
            courseCode
        })

        if (existingCourse) {
            return res.status(400).json({
                message: 'Course already exists'
            })
        }

        const course = await Course.create({
            courseCode,
            courseName,
            description,
            credits,
            teacher,
            program,
            semester,
            capacity
        })

        res.status(201).json({
            message: 'Course created successfully',
            course
        })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to create course',
            error: error.message
        })
    }
}

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find()
            .populate('teacher', 'teacherId department specialization')

        res.json(courses)

    } catch (error) {
        res.status(500).json({
            message: 'Failed to get courses',
            error: error.message
        })
    }
}

module.exports = {
    createCourse,
    getCourses
}