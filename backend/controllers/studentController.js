const Student = require('../models/Student')

const createStudent = async (req, res) => {
    try {
        const {
            studentId,
            phone,
            address,
            dateOfBirth,
            program,
            semester
        } = req.body

        const existingStudent = await Student.findOne({
            $or: [
                { user: req.user.id },
                { studentId }
            ]
        })

        if (existingStudent) {
            return res.status(400).json({
                message: 'Student already exists'
            })
        }

        const student = await Student.create({
            user: req.user.id,
            studentId,
            phone,
            address,
            dateOfBirth,
            program,
            semester
        })

        res.status(201).json({
            message: 'Student profile created successfully',
            student
        })

    } catch (error) {

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation failed',
                error: error.message
            })
        }

        res.status(500).json({
            message: 'Failed to create student profile',
            error: error.message
        })
    }
}

const getMyStudentProfile = async (req, res) => {
    try {
        const student = await Student.findOne({
            user: req.user.id
        }).populate('user', 'name email role')

        if (!student) {
            return res.status(404).json({
                message: 'Student profile not found'
            })
        }

        res.json(student)

    } catch (error) {
        res.status(500).json({
            message: 'Failed to get student profile',
            error: error.message
        })
    }
}

const updateMyStudentProfile = async (req, res) => {
    try {
        const {
            phone,
            address,
            dateOfBirth,
            program,
            semester
        } = req.body

        const student = await Student.findOne({
            user: req.user.id
        })

        if (!student) {
            return res.status(404).json({
                message: 'Student profile not found'
            })
        }

        student.phone = phone
        student.address = address
        student.dateOfBirth = dateOfBirth
        student.program = program
        student.semester = semester

        await student.save()

        res.json({
            message: 'Student profile updated successfully',
            student
        })

    } catch (error) {

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation failed',
                error: error.message
            })
        }

        res.status(500).json({
            message: 'Failed to update student profile',
            error: error.message
        })
    }
}

module.exports = {
    createStudent,
    getMyStudentProfile,
    updateMyStudentProfile
}