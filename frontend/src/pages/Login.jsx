import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password
        }
      )

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      navigate('/student-dashboard')

    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Login failed'
      )
    }
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="bg-[#173B6C] px-8 py-7">
          <h1 className="text-3xl font-bold text-white">
            VedVyas
          </h1>

          <p className="text-blue-100 mt-1">
            Login to your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-5"
        >

          <div>
            <label className="block text-sm font-semibold text-[#1F2937] mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#1FA6A6]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1F2937] mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#1FA6A6]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1FA6A6] hover:bg-[#178B8B] text-white font-semibold py-3 rounded-lg"
          >
            Login
          </button>

          {message && (
            <p className="text-red-600 text-center font-medium">
              {message}
            </p>
          )}

        </form>

      </div>

    </div>
    </>
  )
}

export default Login