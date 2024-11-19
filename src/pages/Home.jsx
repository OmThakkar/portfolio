import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { ExperienceAndEducation } from '../components/ExperienceAndEducation'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <ExperienceAndEducation/>
    </div>
  )
}

export default Home