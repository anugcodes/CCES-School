import React from 'react'
import BarNav from '../landing/BarNav';
import FooterHero from '../landing/FooterHero';
import {Outlet} from 'react-router-dom';


export default function AdminLayout() {
  return (
    <div>
      <BarNav />
      <Outlet />
      <FooterHero />
    </div>
  )
}
