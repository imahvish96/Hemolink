import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const SignUp = () => { 
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here, e.g., sending data to a server.
    console.log('Sign up submitted:', signUpEmail, signUpPassword);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4 mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2>Sign Up</h2>
              <Form onSubmit={handleSignUp}>
                <Form.Group controlId="signUpEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="signUpPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
