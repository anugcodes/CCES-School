import React from 'react'
import Navbar from '../components/navigation-bar';
import {Outlet} from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <div style={{height:"100vh",background:"blue",}}></div>
    </div>
  )
}
