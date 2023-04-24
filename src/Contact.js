import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
          <Col xs={12} md={6}>
            <h3>Contact Information</h3>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@bookstore.com</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-end">
            <p>Designed and developed by Your Name &copy; 2023</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;