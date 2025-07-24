import React from 'react'
import theaterImg from '../../assets/Images/black-stage.jpg';


const ServiceHero = () => {
  return (
    <div className="about-hero-section" style={{
        backgroundImage: `url(${theaterImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        minHeight: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#fff',
        textShadow: '0 2px 8px rgba(0,0,0,0.7)',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 600, zIndex: 2, marginTop: '2rem', fontFamily: 'Play Serif', textTransform:'uppercase' }}>Services</h1>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0.2,0,0,0.5)', zIndex: 1,}}></div>
      </div>
  )
}

export default ServiceHero