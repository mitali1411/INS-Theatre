import React from 'react';
import "../News/News.css"
import Image1 from '../../assets/Images/group-music.jpg'
import Image2 from '../../assets/Images/illustrator.jpg'
import Image3 from '../../assets/Images/illustrator2.jpg'
import { Card, CardBody, Container, Image } from 'react-bootstrap';

const News = () => {

  const newsItems = [
    {
      image: Image1,
      date: '6 Oct',
      title: 'Theater Etiquette 101',
      desc: 'Delve into the enchanting world of costume design and discover the artistry and creativity.',
      link: '#',
    },
    {
      image: Image2,
      date: '6 Oct',
      title: 'The Role of Music in Theater',
      desc: 'Delve into the enchanting world of costume design and discover the artistry and creativity.',
      link: '#',
    },
    {
      image: Image3,
      date: '6 Oct',
      title: 'The Evolution of Dance in Musical Theater',
      desc: 'Delve into the enchanting world of costume design and discover the artistry and creativity.',
      link: '#',
    },
  ];

  return (
    <Container fluid className="news-section">
      <h2 className="discover-title">Explore <em className='creative-hub'>Artistic News</em></h2>
      <div className="news-cards">
        {newsItems.map((item, idx) => (
          <Card className="news-card" key={idx}>
            <div className="news-img-wrapper">
              <Image src={item.image} alt={item.title} className="news-img" />
              <span className="news-date">{item.date}</span>
            </div>
            <CardBody className="news-content">
              <Card.Title className="news-card-title">{item.title}</Card.Title>
              <Card.Text className="news-desc">{item.desc}</Card.Text>
              <a href={item.link} className="news-link">Read More <span className="news-arrow">→</span></a>
            </CardBody>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default News; 