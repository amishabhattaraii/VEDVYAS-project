const dns = require('dns')

dns.setServers(['8.8.8.8', '1.1.1.1'])
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authroutes')
const testRoutes = require('./routes/testRoutes')
const studentRoutes = require('./routes/studentRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const courseRoutes = require('./routes/courseRoutes')
const enrollmentRoutes = require('./routes/enrollmentRoutes')
const performanceRoutes = require('./routes/performanceRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/test', testRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/enrollments', enrollmentRoutes)
app.use('/api/performances', performanceRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'VedVyas API is running!'
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})