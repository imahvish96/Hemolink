import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here, e.g., sending data to a server.
    console.log('Sign in submitted:', signInEmail, signInPassword);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4 mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2>Sign In</h2>
              <Form onSubmit={handleSignIn}>
                <Form.Group controlId="signInEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="signInPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
