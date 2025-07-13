import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";

const programData = [
  {
    date: { month: "Nov", day: "17" },
    title: "Rhythms of Redemption",
    datetime: "Nov 17, 2023 15:00 - Nov 10, 2023 16:00",
    genre: "Drama",
    location: "Berlin Drama Theatre",
    link: "#",
  },
  {
    date: { month: "Nov", day: "14" },
    title: "A Symphony of Seasons",
    datetime: "Nov 14, 2023 15:00 - Nov 10, 2023 16:00",
    genre: "Drama",
    location: "Berlin Drama Theatre",
    link: "#",
  },
  {
    date: { month: "Nov", day: "10" },
    title: "In the Heights",
    datetime: "Nov 10, 2023 15:00 - Nov 10, 2023 16:00",
    genre: "Drama",
    location: "Berlin Drama Theatre",
    link: "#",
  },
  {
    date: { month: "Nov", day: "05" },
    title: "A Midsummer Night's Dream",
    datetime: "Nov 5, 2023 15:00 - Nov 5, 2023 16:00",
    genre: "Drama",
    location: "Berlin Drama Theatre",
    link: "#",
  },
];

const Program = () => (
  <Container fluid className="program-section" data-aos="fade-up">
    <h2 className="discover-title">
      Our Upcoming <span className="creative-hub">Show Program</span>
    </h2>
    <Container className="program-list">
      {programData.map((item, idx) => (
        <div className="program-row" key={item.title} data-aos="fade-up" data-aos-delay={100 * idx}>
          <div className="program-date">
            <span className="program-month">{item.date.month}</span>
            <span className="program-day">{item.date.day}</span>
          </div>
          <div className="program-info">
            <div className="program-title-main">
                <a href={item.link} className="" target="_blank" rel="noopener noreferrer">
                {item.title}
                </a>
            </div>
            <div className="program-datetime">{item.datetime}</div>
            <div className="program-meta">
              <span className="program-genre"><em>Genre:</em> {item.genre}</span>
              <span className="program-location"><em>Location:</em> {item.location}</span>
            </div>
          </div>
          <div className="program-action">
            <a href={item.link} className="program-btn" target="_blank" rel="noopener noreferrer">
              Learn More <span className="program-arrow">↗</span>
            </a>
          </div>
          <hr />
        </div>
      ))}
    </Container>
  </Container>
);

export default Program; 