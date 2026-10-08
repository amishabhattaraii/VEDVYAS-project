import React from 'react'

const Performance = () => {
    return (
        <div className="min-h-screen bg-[#F5F7FA]">

            <main className="max-w-7xl mx-auto px-6 py-10">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#173B6C]">
                        My Performance
                    </h1>

                    <p className="text-gray-500 mt-2">
                        View your academic performance and risk level.
                    </p>
                </div>

                {/* Performance Summary */}
                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-500">
                            Attendance
                        </p>

                        <h2 className="text-3xl font-bold text-[#173B6C] mt-2">
                            0%
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-500">
                            Average Score
                        </p>

                        <h2 className="text-3xl font-bold text-[#173B6C] mt-2">
                            0
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-gray-500">
                            Academic Risk
                        </p>

                        <h2 className="text-3xl font-bold text-green-500 mt-2">
                            LOW
                        </h2>
                    </div>

                </div>

                {/* Course Performance */}
                <div className="mt-10 bg-white rounded-xl p-6 shadow-sm">

                    <h2 className="text-xl font-bold text-[#173B6C] mb-5">
                        Course Performance
                    </h2>

                    <p className="text-gray-500">
                        No performance records available yet.
                    </p>

                </div>

            </main>

        </div>
    )
}

export default Performance