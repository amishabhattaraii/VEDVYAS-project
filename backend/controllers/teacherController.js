const Teacher = require('../models/Teacher')

const createTeacher = async (req, res) => {
    try {
        const {
            user,
            teacherId,
            department,
            specialization,
            phone
        } = req.body

        const existingTeacher = await Teacher.findOne({
            $or: [
                { teacherId },
                { user }
            ]
        })

        if (existingTeacher) {
            return res.status(400).json({
                message: 'Teacher already exists'
            })
        }

        const teacher = await Teacher.create({
            user,
            teacherId,
            department,
            specialization,
            phone
        })

        res.status(201).json({
            message: 'Teacher created successfully',
            teacher
        })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to create teacher',
            error: error.message
        })
    }
}

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find()
            .populate('user', 'name email role')

        res.json(teachers)

    } catch (error) {
        res.status(500).json({
            message: 'Failed to get teachers',
            error: error.message
        })
    }
}

module.exports = {
    createTeacher,
    getTeachers
}