import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Video = () => {
  return (
    <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '1rem', boxShadow: '0 4px 32px rgba(182,75,72,0.15)' }}>
              <iframe
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                title="Theatre Video"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 style={{ color: '#b64b48', fontWeight: 800, fontSize: '2.5rem' }}>About Us</h2>
            <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
              We are a creative collective of artists, performers, and dreamers. Our journey is about bringing stories to life and connecting communities through the power of theatre.
            </p>
          </Col>
        </Row>
    </Container>
  )
}

export default Video