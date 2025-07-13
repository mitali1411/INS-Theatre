import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdCall } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer style={{ background: '#000', padding: '40px 10px' }}>
      <Container>
        <Row className="mb-4 align-items-center">
          <Col md={4} className="">
            <ul>
              <h6>Working Hours:</h6>
              <li>Mon – Tue : 09 AM - 09 PM</li>
              <li>Wed – Thu : 09 AM - 08 PM</li>
              <li>Fri – Sat : 09 AM - 07 PM</li>
              <li>Sunday : Closed</li>
            </ul>
          </Col>
          
          <Col md={4} className="">
            <ul>
              <h6>Info:</h6>
              <li><MdCall className='icon'/><a href="tel: +919074309233">9074309233</a></li>
              <li><MdCall className='icon'/><a href="tel: +919669692246">9669692246</a></li>
              <li><FaEnvelope className='icon'/><a href="mailto:indravatidramasociety@gmail.com">indravatidramasociety@gmail.com</a></li>
              <li><GrLocation className='icon'/><a href="https://maps.app.goo.gl/rPV1EgGYimYayoFX8" target="_blank">353, Near SKPS School, Tilak Nagar, Indore - 452018</a></li>
            </ul>
          </Col>

        
          <Col md={4} className="">
            <ul>
              <h6>Links</h6>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

        </Row>
        <hr />
        <Row className='mt-4'>
          <Col md={6} className="">
            <div className='copy'>
              &copy; {new Date().getFullYear()} INDRAVATI NATYA SAMITI. All rights reserved.
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
    </footer>
  );
} 