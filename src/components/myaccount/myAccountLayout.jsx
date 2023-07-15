import React from 'react'
import { Outlet } from 'react-router-dom'
import BarNav from '../landing/BarNav';
import FooterHero from '../landing/FooterHero';

export default function MyAccountLayout() {
  return (
    <div>
        <BarNav />
        <Outlet />
        <FooterHero />
    </div>
  )
}
