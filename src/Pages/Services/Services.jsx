import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import About_HeroSection from '../About/About_HeroSection';
import { Act, Dance, FilmFestival, Guitar, Illustrator, Illustrator2, ScriptReading, Theater } from '../../constants/imagePath'

const services = [
  { image:Act, title: 'Acting', desc: 'Explore the art of acting with our expert-led workshops and classes.' },
  { image:Illustrator,title: 'Drama', desc: 'Experience the world of drama through performances and training.' },
  { image:Guitar,title: 'Music', desc: 'Join our music programs and discover your inner musician.' },
  { image:Theater,title: 'Theatre Festival', desc: 'Participate in our annual theatre festival and showcase your talent.' },
  { image:FilmFestival,title: 'Film Festival', desc: 'Submit your short films and be part of our film festival.' },
  { image:Dance,title: 'Zumba', desc: 'Stay fit and have fun with our energetic Zumba sessions.' },
  { image:ScriptReading,title: 'Script Reading', desc: 'Engage in script reading sessions and improve your storytelling.' },
  { image:Illustrator2,title: 'Short Films', desc: 'Create, direct, and act in short films with our creative team.' },
];

export default function Services() {
  return (
    <>
    <About_HeroSection/>
    <section style={{ background: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="discover-title">Our <em className='creative-hub'>Services</em></h2>
        <Row>
          {services.map((service, idx) => (
            <Col md={3} sm={6} xs={12} key={service.title} className="mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card style={{ border: 'none', boxShadow: '0 2px 16px rgba(182,75,72,0.08)', borderRadius: '1rem', transition: 'transform 0.3s' }} className="h-100 service-card">
                <div className='news-img-wrapper'>
                  <Image src={service.image} alt={service.title} className="news-img"/>
                </div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
}