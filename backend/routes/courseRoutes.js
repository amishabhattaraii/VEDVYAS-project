const express = require('express')

const {
    createCourse,
    getCourses
} = require('../controllers/courseController')

const protect = require('../middleware/authMiddleware')
const authorize = require('../middleware/roleMiddleware')

const router = express.Router()

router.post('/', protect, authorize('admin'), createCourse)
router.get('/', protect, authorize('admin', 'student'), getCourses)

module.exports = router