import React from 'react'
import Navbar from '../pages/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  )
}

export default Layout