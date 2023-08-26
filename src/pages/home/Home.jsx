import React from 'react'
import NaviBar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Goals from '../../components/goals/Goals'
import Works from '../../components/works/Works'
import Guidelines from '../../components/guidelines/Guidelines'
import Socials from '../../components/socials/Socials'
import Footer from '../../components/footer/Footer'
import Events from '../../components/events/Events'

export default function Home() {
  return (
    <div>
        {/* <NaviBar /> */}
        {/* <Hero /> */}
        <Events />
        <Goals />
        <Works />
        <Guidelines />
        <Socials />
        <Footer />
    </div>
  )
}
