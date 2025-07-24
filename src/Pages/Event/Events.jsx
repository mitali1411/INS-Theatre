import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Event.css';
import eventImg1 from '../../assets/24.jpg';
import eventImg2 from '../../assets/25.jpg';
import eventImg3 from '../../assets/26.jpg';
import eventImg4 from '../../assets/21.jpg';
import eventImg5 from '../../assets/22.jpg';
import eventImg6 from '../../assets/23.jpg';
import EventHero from './EventHero';

const eventData = [
  {
    date: { month: 'Nov', day: '17' },
    title: 'Rhythms of Redemption',
    datetime: 'Nov 17, 2023 15:00 - Nov 17, 2023 16:00',
    genre: 'Drama',
    image: eventImg1,
  },
  {
    date: { month: 'Nov', day: '14' },
    title: 'A Symphony of Seasons',
    datetime: 'Nov 14, 2023 15:00 - Nov 14, 2023 16:00',
    genre: 'Opera',
    image: eventImg2,
  },
  {
    date: { month: 'Nov', day: '10' },
    title: 'In the Heights',
    datetime: 'Nov 10, 2023 15:00 - Nov 10, 2023 16:00',
    genre: 'Ballet',
    image: eventImg3,
  },
  {
    date: { month: 'Nov', day: '17' },
    title: 'Rhythms of Redemption',
    datetime: 'Nov 17, 2023 15:00 - Nov 17, 2023 16:00',
    genre: 'Drama',
    image: eventImg4,
  },
  {
    date: { month: 'Nov', day: '14' },
    title: 'A Symphony of Seasons',
    datetime: 'Nov 14, 2023 15:00 - Nov 14, 2023 16:00',
    genre: 'Opera',
    image: eventImg5,
  },
  {
    date: { month: 'Nov', day: '10' },
    title: 'In the Heights',
    datetime: 'Nov 10, 2023 15:00 - Nov 10, 2023 16:00',
    genre: 'Ballet',
    image: eventImg6,
  },
];

const genres = ['All', 'Drama', 'Opera', 'Ballet'];

const Events = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredEvents = selectedGenre === 'All'
    ? eventData
    : eventData.filter(event => event.genre === selectedGenre);

  return (
    <>
    <EventHero/>
    <Container className="event-section">
      <div className="event-filters">
        {genres.map((genre) => (
          <Button
            key={genre}
            className={`event-filter-btn${selectedGenre === genre ? ' active' : ''}`}
            onClick={() => setSelectedGenre(genre)}
            variant=""
          >
            {genre}
          </Button>
        ))}
      </div>
      <Row className="event-cards-row">
        {filteredEvents.map((event, idx) => (
          <Col md={4} sm={12} key={idx} className="mb-4">
            <div className="event-card" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="event-img-wrapper">
                <img src={event.image} alt={event.title} className="event-img" />
                <div className="event-date-circle">
                  <span className="event-date-month">{event.date.month}</span>
                  <span className="event-date-day">{event.date.day}</span>
                </div>
              </div>
              <div className="event-card-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-datetime">{event.datetime}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
</>
  );
};

export default Events;

