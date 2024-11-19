import React from 'react'
import SectionBadge from './SectionBadge'
import { Star } from 'lucide-react'

const Testimonials = () => {
  return (
    <section className="section-container flex flex-col gap-6 items-center">
        <SectionBadge icon={<Star size={14} fill="white"/>} text={"Rated overall 4.8/5 by clients"}/>
        <h2 className='section-heading'>Glowing <span className="highlight">Testimonials</span> that speak <span className="highlight"> Volumes</span></h2>
    </section>
  )
}

export default Testimonials