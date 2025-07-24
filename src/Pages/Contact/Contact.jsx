import React from 'react';
import '../../../src/App.css'
import { Container, Row, Col} from 'react-bootstrap';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import Map from './Map';

import Info from './Info';


const Contact =() => {
  return (
    <>
    <ContactHero/>
    <section style={{fontFamily: 'Montserrat, sans-serif'}}>
      <Container className='p-3'>
        {/* <h2 className="creative-hub">Contact Us</h2> */}
        <Row>
          <Col lg={6} md={12} sm={12} className='' data-aos="fade-right">
            <ContactForm/>
          </Col>
          <Col lg={6} md={12} sm={12} className="p-3 py-5" data-aos="fade-right">
            <Info/>
          </Col>
        </Row>
          
        <Row>
          <Col md={12} className="px-3 py-5">
            <Map/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Contact