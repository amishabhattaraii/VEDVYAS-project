const express = require('express')

const {
    createEnrollment,
    getEnrollments
} = require('../controllers/enrollmentController')

const protect = require('../middleware/authMiddleware')
const authorize = require('../middleware/roleMiddleware')

const router = express.Router()

router.post('/', protect, authorize('admin'), createEnrollment)
router.get('/', protect, authorize('admin'), getEnrollments)

module.exports = router