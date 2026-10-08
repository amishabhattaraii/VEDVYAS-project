import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StudentProfile = () => {
    const navigate = useNavigate()

    const [studentId, setStudentId] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [program, setProgram] = useState('')
    const [semester, setSemester] = useState('')

    const [profileExists, setProfileExists] = useState(false)

    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {

        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token')

                const response = await axios.get(
                    'http://localhost:5000/api/students/me',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                const student = response.data

                setProfileExists(true)

                setStudentId(student.studentId || '')
                setPhone(student.phone || '')
                setAddress(student.address || '')

                setDateOfBirth(
                    student.dateOfBirth
                        ? student.dateOfBirth.split('T')[0]
                        : ''
                )

                setProgram(student.program || '')
                setSemester(student.semester || '')

            } catch (error) {

                console.error('Profile fetch error:', error)

                // 404 means the student has not created a profile yet
                if (error.response?.status === 404) {
                    setProfileExists(false)
                    setError('')
                } else {
                    setError(
                        error.response?.data?.message ||
                        'Failed to load student profile'
                    )
                }
            }
        }

        fetchProfile()

    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault()

        setError('')
        setMessage('')

        // Phone validation
        if (!/^9\d{9}$/.test(phone)) {
            setError(
                'Phone number must be exactly 10 digits and start with 9.'
            )
            return
        }

        // Semester validation
        const semesterNumber = Number(semester)

        if (
            !Number.isInteger(semesterNumber) ||
            semesterNumber < 1 ||
            semesterNumber > 8
        ) {
            setError(
                'Semester must be a whole number between 1 and 8.'
            )
            return
        }

        // Date of birth validation
        const today = new Date().toISOString().split('T')[0]

        if (dateOfBirth > today) {
            setError('Date of birth cannot be in the future.')
            return
        }

        try {

            const token = localStorage.getItem('token')

            const response = await axios({
                method: profileExists ? 'put' : 'post',

                url: profileExists
                    ? 'http://localhost:5000/api/students/me'
                    : 'http://localhost:5000/api/students',

                data: {
                    studentId,
                    phone,
                    address,
                    dateOfBirth,
                    program,
                    semester: semesterNumber
                },

                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setMessage(response.data.message)
            setError('')

            // Profile now exists
            setProfileExists(true)

            setTimeout(() => {
                navigate('/student-dashboard')
            }, 1000)

        } catch (error) {

            setError(
                error.response?.data?.message ||
                'Failed to save student profile'
            )

            setMessage('')
        }
    }

    return (
        <div className="min-h-screen bg-[#F5F7FA] py-10 px-6">

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">

                <h1 className="text-3xl font-bold text-[#173B6C] mb-2">
                    {profileExists
                        ? 'My Student Profile'
                        : 'Create Student Profile'}
                </h1>

                <p className="text-gray-500 mb-8">
                    {profileExists
                        ? 'View and update your personal and academic information.'
                        : 'Enter your academic and personal information.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Student ID */}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Student ID
                        </label>

                        <input
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            placeholder="e.g. STU001"
                            required
                            disabled={profileExists}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1FA6A6] disabled:bg-gray-100"
                        />
                    </div>

                    {/* Program */}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Program
                        </label>

                        <input
                            type="text"
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
                            placeholder="e.g. BSc CSIT"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1FA6A6]"
                        />
                    </div>

                    {/* Semester */}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Semester
                        </label>

                        <input
                            type="number"
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            placeholder="e.g. 5"
                            min="1"
                            max="8"
                            step="1"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1FA6A6]"
                        />
                    </div>

                    {/* Phone */}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone
                        </label>

                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="98XXXXXXXX"
                            maxLength="10"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1FA6A6]"
                        />
                    </div>

                    {/* Address */}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Address
                        </label>

                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Kathmandu, Nepal"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1FA6A6]"
                        />
                    </div>

                    {/* Date of Birth */}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Date of Birth
                        </label>

                        <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            max={new Date().toISOString().split('T')[0]}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1FA6A6]"
                        />
                    </div>

                    {/* Messages */}

                    {error && (
                        <p className="text-red-500 text-sm">
                            {error}
                        </p>
                    )}

                    {message && (
                        <p className="text-green-600 text-sm">
                            {message}
                        </p>
                    )}

                    {/* Button */}

                    <button
                        type="submit"
                        className="w-full bg-[#173B6C] hover:bg-[#122F56] text-white font-semibold py-3 rounded-lg"
                    >
                        {profileExists
                            ? 'Update Profile'
                            : 'Create Profile'}
                    </button>

                </form>

            </div>

        </div>
    )
}

export default StudentProfile