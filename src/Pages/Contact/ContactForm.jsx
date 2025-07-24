import React from 'react'
import { Form, Button } from 'react-bootstrap';

const formStyle = {
  // border: '2px solid #f28c4b',
  borderRadius: '12px',
  paddingInline: '50px',
  paddingBlock: '50px',
  // maxWidth: '400px',
  // margin: '2rem auto',
  background: '#fff',
  fontFamily: 'Montserrat, sans-serif'
};

// const labelStyle = {
//   color: '#f28c4b',
//   fontWeight: 'bold',
//   marginBottom: '0.5rem',
// };

const inputStyle = {
  borderRadius: '5px',
  // border: '1.5px solid #f28c4b',
  marginBottom: '5px',
  boxShadow: 'none',
  background: 'rgb(238, 234, 231)',
  padding: '12px'
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
};

const buttonStyle = {
  background: '#f28c4b',
  border: 'none',
  fontWeight: 'bold',
  borderRadius: '5px',
  padding: '8px 22px',
  fontSize: '1.1rem',
  marginTop: '0.5rem',
};

const ContactForm = () => {
  return (
    <Form className='shadow form' style={{}}>
      <h2 className='display-6' style={{color: '#f28c4b'}}>Get In Touch</h2>
      <p>Please drop out your message, query or feedback in following feedback form, We will contact you very soon.</p>
      <Form.Group className="mb-3" controlId="formName">
        {/* <Form.Label style={labelStyle}>Name</Form.Label> */}
        <Form.Control className='form-controls' type="text" placeholder="Enter your name" style={{}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        {/* <Form.Label style={labelStyle}>Email</Form.Label> */}
        <Form.Control className='form-controls' type="email" placeholder="Enter your email" style={{}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMobile">
        {/* <Form.Label style={labelStyle}>Mobile Number</Form.Label> */}
        <Form.Control className='form-controls' type="number" placeholder="Enter your mobile number" style={{}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        {/* <Form.Label style={labelStyle}>Message</Form.Label> */}
        <Form.Control className='form-controls' as="textarea" rows={4} placeholder="Type your message" style={{}} />
      </Form.Group>
      <Button className='btn' type="submit" style={{}}>
        Send Message
      </Button>
    </Form>
  )
}

export default ContactForm