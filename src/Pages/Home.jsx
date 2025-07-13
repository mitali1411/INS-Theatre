import React from 'react'
import HeroSection from './Home/HeroSection'
import Program from './Home/Program'
import Section2 from './Home/Section2'
import Discover from './Home/Discover'
import Testimonial from './Home/Testimonial'
import News from './News/News'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Section2/>
      <Program/>
      <Discover/>
      <Testimonial/>
      <News/>
    </>
  )
}

export default Home