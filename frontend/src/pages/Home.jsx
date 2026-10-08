import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../pages/Navbar'

const Home = () => {
  return (
    <>
     

      <main className="min-h-screen bg-[#F5F7FA]">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>

              <div className="inline-block bg-[#E6F7F7] text-[#1FA6A6] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Academic Management System
              </div>

              <h1 className="text-5xl font-bold text-[#173B6C] leading-tight">
                Manage your
                <span className="text-[#1FA6A6]"> academic journey </span>
                with ease.
              </h1>

              <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl">
                VedVyas brings students, teachers, courses and academic
                performance together in one simple platform.
              </p>

              <div className="flex gap-4 mt-8">

                <Link
                  to="/register"
                  className="bg-[#1FA6A6] hover:bg-[#178B8B] text-white px-7 py-3 rounded-lg font-semibold"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="border-2 border-[#173B6C] text-[#173B6C] hover:bg-[#173B6C] hover:text-white px-7 py-3 rounded-lg font-semibold"
                >
                  Login
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* Features */}
        <section className="bg-white border-t border-gray-200">

          <div className="max-w-6xl mx-auto px-6 py-16">

            <div className="text-center mb-12">

              <p className="text-[#1FA6A6] font-semibold">
                EVERYTHING IN ONE PLACE
              </p>

              <h2 className="text-3xl font-bold text-[#173B6C] mt-2">
                Built for better academic decisions
              </h2>

              <p className="text-gray-500 mt-3">
                Simple tools to help manage and understand academic progress.
              </p>

            </div>


            <div className="grid md:grid-cols-3 gap-6">

              {/* Feature 1 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

                <div className="w-12 h-12 bg-[#E6F7F7] rounded-lg flex items-center justify-center text-2xl mb-5">
                  📚
                </div>

                <h3 className="text-xl font-bold text-[#173B6C]">
                  Course Management
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  Browse available courses, manage enrollments and keep
                  academic information organized.
                </p>

              </div>


              {/* Feature 2 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

                <div className="w-12 h-12 bg-[#E6F7F7] rounded-lg flex items-center justify-center text-2xl mb-5">
                  📊
                </div>

                <h3 className="text-xl font-bold text-[#173B6C]">
                  Performance Tracking
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  Monitor academic performance and understand progress
                  throughout the semester.
                </p>

              </div>


              {/* Feature 3 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

                <div className="w-12 h-12 bg-[#E6F7F7] rounded-lg flex items-center justify-center text-2xl mb-5">
                  🤖
                </div>

                <h3 className="text-xl font-bold text-[#173B6C]">
                  Academic Prediction
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  Identify academic risk using performance data and
                  predictive analysis.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* Bottom CTA */}
        <section className="bg-[#173B6C]">

          <div className="max-w-6xl mx-auto px-6 py-16 text-center">

            <h2 className="text-3xl font-bold text-white">
              Ready to get started?
            </h2>

            <p className="text-blue-200 mt-3">
              Create your account and start managing your academic journey.
            </p>

            <Link
              to="/register"
              className="inline-block mt-7 bg-[#1FA6A6] hover:bg-[#178B8B] text-white px-8 py-3 rounded-lg font-semibold"
            >
              Create Account
            </Link>

          </div>

        </section>

      </main>
    </>
  )
}

export default Home