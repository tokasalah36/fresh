import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
export default function Layout() {




  return <>
    <Navbar />
    <div className="container mx-auto md:pt-11">

      <Outlet></Outlet>
    </div>

  </>
}
