const Performance = require('../models/Performance')

const createPerformance = async (req, res) => {
    try {
        const {
            student,
            course,
            attendance,
            previousExamScore,
            assignmentScore,
            finalExamScore
        } = req.body

        const performance = await Performance.create({
            student,
            course,
            attendance,
            previousExamScore,
            assignmentScore,
            finalExamScore
        })

        res.status(201).json({
            message: 'Performance created successfully',
            performance
        })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to create performance',
            error: error.message
        })
    }
}

const getPerformances = async (req, res) => {
    try {
        const performances = await Performance.find()
            .populate('student', 'studentId program semester')
            .populate('course', 'courseCode courseName')

        res.json(performances)

    } catch (error) {
        res.status(500).json({
            message: 'Failed to get performances',
            error: error.message
        })
    }
}

module.exports = {
    createPerformance,
    getPerformances
}