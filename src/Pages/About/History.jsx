import React, { useState } from 'react';
import { Container, Row, Col, Card, ButtonGroup, Button, Image } from 'react-bootstrap';
import { Guitar, Bellet, CoupleDance, Hands, Shooting } from '../../constants/imagePath';

const historyData = [
  {
    year: 2005,
    title: 'Founded in 2005',
    description:
      'Experience the magic of live performances and immerse yourself in a world of creativity and emotion. Discover captivating tales, breathtaking performances, and unforgettable moments in the heart of our theater. Join us for an unforgettable theatrical journey.',
    image: Guitar,
  },
  {
    year: 2010,
    title: 'Expanded in 2010',
    description:
      'Our theater expanded, introducing new genres and welcoming more artists. The stage became a canvas for diverse stories and cultures.',
    image: Bellet,
  },
  {
    year: 2015,
    title: 'Awarded in 2015',
    description:
      'Recognized for excellence, our theater received prestigious awards, celebrating our commitment to the arts and the community.',
    image: CoupleDance,
  },
  {
    year: 2020,
    title: 'Modernized in 2020',
    description:
      'A new era began with state-of-the-art technology and modern facilities, enhancing the experience for both performers and audiences.',
    image: Hands,
  },
  {
    year: 2025,
    title: 'Resilience in 2025',
    description:
      'Despite challenges, our theater continued to inspire and connect people, embracing digital performances and new ways to share art.',
    image: Shooting,
  },
];

const History = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className='about'>
      <Container>
        <h3 className="discover-title text-center mb-4">
          Our Theatre <em className='creative-hub'>History</em>
        </h3>
        <Card className="history-box shadow-lg">
          {/* Timeline Navigation */}
          <Card.Header className="bg-white border-bottom-0 pt-5 px-5">
            <ButtonGroup className="year">
              {historyData.map((item, idx) => (
                <Button
                  key={item.year}
                  variant={selected === idx ? '' : 'text-body-tertiary'}
                  className="flex-fill"
                  style={{ background: 'none', border: 'none', boxShadow: 'none',
                    color: selected === idx ? 'black' : 'grey',}}
                  onClick={() => setSelected(idx)}
                >
                  {item.year}
                </Button>
              ))}
            </ButtonGroup>
            <div className="dot">
              {historyData.map((item, idx) => (
                <div
                  key={item.year}
                  onClick={() => setSelected(idx)}
                  style={{
                    // display: 'inline-block',
                    borderRadius: '50%',
                    background: selected === idx ? '#f77c2b' : '#bbb',
                    transition: 'background 0.2s',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 2
                  }}
                ></div>
              ))}
            </div>
            <hr style={{}}/>
          </Card.Header>
          {/* Timeline Content */}
          <Card.Body className="">
            <Row className="card-content align-items-center justify-content-between flex-wrap">
              <Col md={6}>
                <h3 style={{}}>{historyData[selected].title}</h3>
                <p style={{ color: '#444', lineHeight: 1.5 }}>{historyData[selected].description}</p>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <Image
                className='image'
                  src={historyData[selected].image}
                  alt={historyData[selected].title}
                  style={{}}
                  fluid
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default History; 