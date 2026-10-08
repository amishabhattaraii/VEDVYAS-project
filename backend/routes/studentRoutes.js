const express = require('express')

const {
    createStudent,
    getMyStudentProfile,
    updateMyStudentProfile
} = require('../controllers/studentController')

const protect = require('../middleware/authMiddleware')
const authorize = require('../middleware/roleMiddleware')

const router = express.Router()

router.post('/', protect, authorize('student'), createStudent)
router.get('/me', protect, getMyStudentProfile)
router.put('/me', protect, authorize('student'), updateMyStudentProfile)

module.exports = router