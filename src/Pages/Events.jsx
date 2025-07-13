import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import eventImg1 from '../assets/Event-1.png';
import eventImg2 from '../assets/Event-2.png';
import eventImg3 from '../assets/Event-3.jpg';

const events = [
  {
    date: '7 July 2025',
    title: 'Production Oriented Theatre Workshop',
    desc: 'A 45-day intensive workshop by Shiva Kunder (Actor, Director, MPSD Alumni). Learn Acting, Improvisation, Public Speaking, Script Reading, Text Analysis, Navrasa, Drama Production, and Short Film creation.',
    img: eventImg1,
    time: '4 PM - 6 PM',
    venue: '353, Near SKPS School, Sector A, Tilak Nagar, Indore',
    contact: '9669692246, 9074309233',
    button: 'Register',
  },
  {
    date: '22 March 2025',
    title: 'Open Mic',
    desc: 'Open Mic event at Mumbasa Cafe Scheme No. 78. Registration Free! For inquiry: 9009871314, 8770689916.',
    img: eventImg2,
    time: '7 PM - 9 PM',
    venue: 'Mumbasa Cafe Scheme No. 78',
    contact: '9009871314, 8770689916',
    button: 'Register',
  },
  {
    date: '9 May 2025',
    title: 'Patni Ka Patra',
    desc: 'A solo play by Dr. Shampa Majumdar, written by Rabindra Nath Tagore. Celebrate Rabindranath Tagore Jayanti with us!',
    img: eventImg3,
    time: '8 PM',
    venue: '353, Near SKPS School, Sector A, Tilak Nagar, Indore',
    contact: '9669692246, 9074309233',
    button: 'Book Now',
  },
];

export default function Events() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <h2 className="text-center mb-5" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '2.5rem', marginTop: '3rem' }}>Events</h2>
      {events.map((event, idx) => {
        const isBeige = idx % 2 === 1;
        const sectionStyle = {
          background: isBeige ? 'var(--beige)' : 'var(--black)',
          color: isBeige ? 'var(--black)' : 'var(--beige)',
          width: '100%',
          margin: 0,
          padding: '3rem 0',
          borderTop: idx !== 0 ? '1px solid #e0d6c3' : 'none',
        };
        const content = (
          <>
            <Col
              md={4}
              xs={12}
              style={{
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 350,
                marginBottom: '1.5rem',
              }}
            >
              <img
                src={event.img}
                alt={event.title}
                style={{
                  width: '100%',
                  maxHeight: 350,
                  objectFit: 'contain',
                  display: 'block',
                  border: 'none',
                }}
              />
            </Col>
            <Col
              md={8}
              xs={12}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem',
                minHeight: 350,
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', marginBottom: 8 }}>{event.date} | {event.time}</div>
              <h3 style={{ fontWeight: 900, fontSize: '2rem', color: isBeige ? 'var(--primary)' : 'var(--beige)', margin: '0.5rem 0' }}>{event.title}</h3>
              <div style={{ fontWeight: 600, marginBottom: 16 }}>{event.desc}</div>
              <div style={{ marginBottom: 8 }}><strong>Venue:</strong> {event.venue}</div>
              <div style={{ marginBottom: 8 }}><strong>Contact:</strong> {event.contact}</div>
              <Button
                style={{
                  background: 'var(--primary)',
                  border: 'none',
                  fontWeight: 'bold',
                  color: isBeige ? 'var(--beige)' : 'var(--black)',
                  marginTop: '1.5rem',
                  width: 'fit-content',
                  padding: '0.75rem 2rem',
                  fontSize: '1.1rem',
                }}
                size="lg"
              >
                {event.button}
              </Button>
            </Col>
          </>
        );
        return (
          <section key={event.title} style={sectionStyle}>
            <Container fluid style={{ padding: 0 }}>
              <Row
                className={`align-items-stretch flex-column flex-md-row${idx % 2 === 0 ? '' : ' flex-md-row-reverse'}`}
                style={{ margin: 0 }}
              >
                {content}
              </Row>
            </Container>
          </section>
        );
      })}
    </div>
  );
}