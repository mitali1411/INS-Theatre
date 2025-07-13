import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Home.css';
import { FaMicrophone, FaTheaterMasks } from 'react-icons/fa';
import { Container, Row } from 'react-bootstrap';


const Discover = () => {

  const services = [
    {
      icon: <FaMicrophone/>,
      title: 'Voice Training',
      desc: `Whether you're preparing for a role or simply aiming to enhance your vocal abilities, our trainers will provide personalized coaching to help you.`
    },
    {
      icon: <FaTheaterMasks/>,
      title: 'Acting Classes',
      desc: 'Explore the art of acting through comprehensive classes designed to develop your technique, emotional range, and stage presence.'
    },
    {
      icon: <FaMicrophone/>,
      title: 'Dance Workshops',
      desc: 'From classical to contemporary, our dance workshops cater to dancers of all levels. Develop skills and refine your performance technique.'
    },
    {
      icon: <FaTheaterMasks/>,
      title: 'Kids Workshops',
      desc: 'From classical to contemporary, our dance workshops cater to dancers of all levels. Develop skills and refine your performance technique.'
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="discover-section">
      <h1 className='discover-title'>Discover the <em className='creative-hub'>Creative Hub</em> </h1>
      <div className='discover-cards'>
        <Container>
          <Row>
          <div className="row">
        {services.map((item, index) => 
        <div className='col-xl-3 col-md-4 col-sm-6 col-xs-6' key={index}>
          <div className='discover-card'>
            <div className='discover-icon'>{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
        </div>
      )}
        </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Discover; 