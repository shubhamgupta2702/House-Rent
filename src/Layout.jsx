import React from 'react'
import Header from './Components/Header.jsx'
import Footer2 from './Components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer2 />
    </>
  )
}

export default Layout
