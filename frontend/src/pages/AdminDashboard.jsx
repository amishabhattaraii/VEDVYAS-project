import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {

    return (
        <div className="min-h-screen bg-[#F5F7FA]">

            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* Welcome */}

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-[#173B6C]">
                        Admin Dashboard
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage students, teachers, courses and academic data.
                    </p>

                </div>

                {/* Summary Cards */}

                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-500">
                            Students
                        </p>

                        <h2 className="text-3xl font-bold text-[#173B6C] mt-2">
                            0
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-500">
                            Teachers
                        </p>

                        <h2 className="text-3xl font-bold text-[#173B6C] mt-2">
                            0
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-500">
                            Courses
                        </p>

                        <h2 className="text-3xl font-bold text-[#173B6C] mt-2">
                            0
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-500">
                            Enrollments
                        </p>

                        <h2 className="text-3xl font-bold text-[#173B6C] mt-2">
                            0
                        </h2>
                    </div>

                </div>

                {/* Management */}

                <div className="mt-10 bg-white rounded-xl p-6 shadow-sm">

                    <h2 className="text-xl font-bold text-[#173B6C] mb-5">
                        Management
                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <Link
                            to="/courses"
                            className="bg-[#1FA6A6] text-white px-5 py-3 rounded-lg"
                        >
                            Manage Courses
                        </Link>

                        <button
                            className="bg-[#173B6C] text-white px-5 py-3 rounded-lg"
                        >
                            Manage Students
                        </button>

                        <button
                            className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg"
                        >
                            Manage Teachers
                        </button>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default AdminDashboard