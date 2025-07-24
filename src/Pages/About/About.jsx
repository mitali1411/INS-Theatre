import React from 'react';
import '../About/About.css'
import History from './History';
import About_HeroSection from './About_HeroSection';
import Mission from './Mission';

const About = () => {
  return (
    <>
      <section className='about'>
      <About_HeroSection/>
        <Mission/>
        <History/>
      </section>
    </>
  );
}

export default About