import React from 'react'
import BarNav from '../components/landing/BarNav'
import Hero from '../components/landing/Hero'
import Products from '../components/landing/Products'
import FooterHero from '../components/landing/FooterHero'
import About from '../components/landing/About'
import Category from '../components/landing/Category'

function Landing() {
    return (
        <>
            <BarNav />
            <Hero />
            <Products />
            <About />
            <Category />
            <FooterHero />
        </>
    )
}

export default Landing