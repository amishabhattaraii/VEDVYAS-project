import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    navigate('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-[#173B6C] hover:bg-[#122F56] text-white font-semibold px-5 py-2 rounded-lg"
    >
      Logout
    </button>
  )
}

export default LogoutButton