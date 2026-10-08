const express = require('express')

const {
    createPerformance,
    getPerformances
} = require('../controllers/performanceController')

const protect = require('../middleware/authMiddleware')
const authorize = require('../middleware/roleMiddleware')

const router = express.Router()

router.post('/', protect, authorize('admin'), createPerformance)
router.get('/', protect, authorize('admin'), getPerformances)

module.exports = router