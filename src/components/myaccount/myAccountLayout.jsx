import React from 'react'
import { Outlet } from 'react-router-dom'
import BarNav from '../landing/BarNav';

export default function MyAccountLayout() {
  return (
    <div>
        <BarNav />
        <Outlet />
    </div>
  )
}
