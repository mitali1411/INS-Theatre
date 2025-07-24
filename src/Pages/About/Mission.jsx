import React from 'react'
import { Container, Row, Col, Card, ButtonGroup, Button, Image } from 'react-bootstrap';
import { FaBullseye, FaEye, FaUser } from 'react-icons/fa';

const Mission = () => {

    const mission = [
        {icon: FaBullseye, title: 'Mission', desc: 'To inspire, educate, and entertain through the performing arts, fostering creativity and empathy in our community.'},
        {icon: FaEye, title: 'Vision', desc: 'To be a leading force in the arts, creating transformative experiences and nurturing the next generation of performers.'},
        {icon: FaUser, title: 'Team', desc: 'Our team is made up of passionate actors, musicians, directors, and educators, all united by a love for the stage.'},
    ]
  return (
    <Container className='mission'>
          <div>
          <Row className="">
            {mission.map((item, index) => 
             <Col data-aos="fade-up" key={index}>
             <Card className='card p-3' style={{border:'' ,boxShadow: '0 2px 16px rgba(182,75,72,0.08)', borderRadius: '1rem'}}>
               <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
                 <item.icon style={{color: '#f28c4b'}} size={50}/>
                 <Card.Title className='text-uppercase text-center mt-3'>{item.title}</Card.Title>
                 <Card.Text className='text-center'>{item.desc}</Card.Text>
               </Card.Body>
             </Card>
           </Col>)}
          </Row>
          </div>
        </Container>
  )
}

export default Mission