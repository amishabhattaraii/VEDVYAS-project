import React from 'react'
import { Link } from 'react-router-dom'
const StudentDashboard = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    return (

            <div className="min-h-screen bg-[#F5F7FA]">

                <main className="max-w-7xl mx-auto px-6 py-10">

                    {/* Welcome */}
                    <div className="mb-8">

                        <h2 className="text-3xl font-bold text-[#173B6C]">
                            Welcome, {user?.name} 👋
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Here's an overview of your academic journey.
                        </p>

                    </div>


                    {/* Dashboard Cards */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Courses */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">

                            <p className="text-gray-500">
                                Courses
                            </p>

                            <h3 className="text-3xl font-bold text-[#173B6C] mt-2">
                                0
                            </h3>

                        </div>


                        {/* Enrollments */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">

                            <p className="text-gray-500">
                                Enrollments
                            </p>

                            <h3 className="text-3xl font-bold text-[#173B6C] mt-2">
                                0
                            </h3>

                        </div>


                        {/* Academic Risk */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">

                            <p className="text-gray-500">
                                Academic Risk
                            </p>

                            <h3 className="text-3xl font-bold text-green-500 mt-2">
                                Low
                            </h3>

                        </div>

                    </div>


                    {/* Quick Actions */}
                    <div className="mt-10 bg-white rounded-xl p-6 shadow-sm">

                        <h3 className="text-xl font-bold text-[#173B6C] mb-5">
                            Quick Actions
                        </h3>

                        <div className="flex flex-wrap gap-4">

                            <Link
                                to="/student-profile"
                                className="bg-[#173B6C] text-white px-5 py-3 rounded-lg"
                            >
                                My Profile
                            </Link>

                            <Link
                                to="/courses"
                                className="bg-[#1FA6A6] text-white px-5 py-3 rounded-lg"
                            >
                                Browse Courses
                            </Link>
                            
                            <Link
                                to="/performance"
                                className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg"
                            >
                                My Performance
                            </Link>

                        </div>

                    </div>

                </main>

            </div>

    
    )
}

export default StudentDashboard