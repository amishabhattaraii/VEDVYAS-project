import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const token = localStorage.getItem('token')

  return (
    <nav className="bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-[#173B6C]"
        >
          VedVyas
        </Link>

        <div className="flex items-center gap-4">

          {token ? (
            <>
              <Link
                to="/student-dashboard"
                className="text-[#173B6C] font-semibold hover:text-[#1FA6A6]"
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem('token')
                  localStorage.removeItem('user')
                  window.location.href = '/login'
                }}
                className="bg-[#173B6C] hover:bg-[#122F56] text-white px-5 py-2 rounded-lg font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-[#173B6C] font-semibold hover:text-[#1FA6A6]"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-[#1FA6A6] hover:bg-[#178B8B] text-white px-5 py-2 rounded-lg font-semibold"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>
  )
}

export default Navbar