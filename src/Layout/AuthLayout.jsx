import React from 'react'
import Navbar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default AuthLayout