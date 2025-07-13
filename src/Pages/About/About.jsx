import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../About/About.css'
import History from './History';
import About_HeroSection from './About_HeroSection';

export default function About() {
  return (
    <>
      <About_HeroSection/>
      <section>
        <Container>
          {/* <Video/> */}
          <Row className="mb-5">
            <Col md={4} data-aos="fade-up">
              <Card style={{ border: 'none', boxShadow: '0 2px 16px rgba(182,75,72,0.08)', borderRadius: '1rem' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#b64b48', fontWeight: 700 }}>Mission</Card.Title>
                  <Card.Text>
                    To inspire, educate, and entertain through the performing arts, fostering creativity and empathy in our community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card style={{ border: 'none', boxShadow: '0 2px 16px rgba(182,75,72,0.08)', borderRadius: '1rem' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#b64b48', fontWeight: 700 }}>Vision</Card.Title>
                  <Card.Text>
                    To be a leading force in the arts, creating transformative experiences and nurturing the next generation of performers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card style={{ border: 'none', boxShadow: '0 2px 16px rgba(182,75,72,0.08)', borderRadius: '1rem' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#b64b48', fontWeight: 700 }}>Team</Card.Title>
                  <Card.Text>
                    Our team is made up of passionate actors, musicians, directors, and educators, all united by a love for the stage.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <History/>

        </Container>
      </section>
    </>
  );
}