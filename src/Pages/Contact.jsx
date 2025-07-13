import React from 'react';
import '../../src/App.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import About_HeroSection from './About/About_HeroSection';

export default function Contact() {
  return (
    <>
    <About_HeroSection/>
    <section>
      <Container>
        <h2 className="creative-hub">Contact Us</h2>
        <Row>
          <Col md={6} data-aos="fade-right">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Type your message" />
              </Form.Group>
              <Button type="submit" style={{ background: '#b64b48', border: 'none', fontWeight: 'bold' }}>
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6} data-aos="fade-left">
          <div style={{ overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019145409!2d-122.4194151846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e0a6e0b%3A0x7d0b0b0b0b0b0b0b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1514524647889"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </Col>
          </Row>
          <Row>
          <Col md={6} data-aos="fade-right">
            <div className="mt-3" style={{ color: '#b64b48', fontWeight: 700 }}>
              Email: info@theatregroup.com<br />
              Phone: 9669692246, 9074309233<br />
              Venue: 353, Near SKPS School, Sector A, Tilak Nagar, Indore
            </div>
          </Col>
            <Col md={4} className="text-md-end">
            <a href="https://www.instagram.com/indore_ins_theatre_/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon'/></a>
            <a href="https://www.facebook.com/search/top?q=%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%A4%E0%A5%80%20%E0%A4%A8%E0%A4%BE%E0%A4%9F%E0%A5%8D%E0%A4%AF%20%E0%A4%B8%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BF%20%E0%A4%B8%E0%A5%80%E0%A4%A7%E0%A5%80" target="_blank" rel="noopener noreferrer" className='icon'><FaFacebook /></a>
            <a href="https://www.youtube.com/@INSSIDHI" target="_blank" rel="noopener noreferrer"><FaYoutube className='icon'/></a>
            <a href="https://wa.me/+919669692246" target="_blank"><FaWhatsapp className='icon'/></a>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}