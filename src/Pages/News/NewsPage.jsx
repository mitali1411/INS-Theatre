import React from 'react'
import { newsItems } from './newsItems'
import { Card, CardBody, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsPage = () => {
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
              <Card.Text className="news-desc">{item.desc.slice(0,80)}...</Card.Text>
              <Link
                // to={`/news/${idx + 1}/${encodeURIComponent(item.title.replace(/\s+/g, '-').toLowerCase())}`}
                to={`/news/${item.id}/${encodeURIComponent(item.title.replace(/\s+/g, '-').toLowerCase())}`}
                className="news-link"
              >
                Read More <span className="news-arrow">→</span>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>

    </Container>
  )
}

export default NewsPage