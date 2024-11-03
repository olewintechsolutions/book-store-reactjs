import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation

const LoginPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <img src="/path/to/your/logo.png" alt="/" height="100" />
        <h1 className="mb-4">Login Page</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Row className="mt-3">
          <Col>
            <NavLink to="/signup" className="btn btn-outline-primary">
              Sign Up
            </NavLink>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LoginPage;
