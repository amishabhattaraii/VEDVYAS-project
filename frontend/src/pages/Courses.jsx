import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Courses = () => {

    const [courses, setCourses] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {

        const fetchCourses = async () => {

            try {

                const token = localStorage.getItem('token')

                const response = await axios.get(
                    'http://localhost:5000/api/courses',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                setCourses(response.data)

            } catch (error) {

                setError(
                    error.response?.data?.message ||
                    'Failed to load courses'
                )
            }
        }

        fetchCourses()

    }, [])

    return (
        <div className="min-h-screen bg-[#F5F7FA]">

            <main className="max-w-7xl mx-auto px-6 py-10">

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-[#173B6C]">
                        Courses
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Browse the available courses.
                    </p>

                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {courses.length === 0 ? (

                    <div className="bg-white rounded-xl p-6 shadow-sm">

                        <p className="text-gray-500">
                            No courses available yet.
                        </p>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {courses.map((course) => (

                            <div
                                key={course._id}
                                className="bg-white rounded-xl p-6 shadow-sm"
                            >

                                <div className="flex justify-between items-start">

                                    <div>

                                        <p className="text-sm font-semibold text-[#1FA6A6]">
                                            {course.courseCode}
                                        </p>

                                        <h2 className="text-xl font-bold text-[#173B6C] mt-1">
                                            {course.courseName}
                                        </h2>

                                    </div>

                                    <span className="text-sm text-gray-500">
                                        {course.credits} Credits
                                    </span>

                                </div>

                                <p className="text-gray-500 mt-4">
                                    {course.description || 'No description available.'}
                                </p>

                                <div className="mt-5 space-y-2 text-sm text-gray-600">

                                    <p>
                                        <strong>Program:</strong> {course.program}
                                    </p>

                                    <p>
                                        <strong>Semester:</strong> {course.semester}
                                    </p>

                                    {course.teacher && (
                                        <p>
                                            <strong>Teacher:</strong>{' '}
                                            {course.teacher.teacherId}
                                        </p>
                                    )}

                                    {course.capacity && (
                                        <p>
                                            <strong>Capacity:</strong>{' '}
                                            {course.capacity}
                                        </p>
                                    )}

                                </div>

                                <button
                                    className="w-full mt-6 bg-[#1FA6A6] hover:bg-[#178B8B] text-white font-semibold py-3 rounded-lg"
                                >
                                    Enroll
                                </button>

                            </div>

                        ))}

                    </div>

                )}

            </main>

        </div>
    )
}

export default Courses