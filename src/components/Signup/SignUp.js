import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import signup from '../../api/signup';
import { useUser } from '../../contexts/authCtx';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  
  const navigate = useNavigate();
  const user = useUser()

  useEffect(() => {
    if(user !== null){
      return navigate('/')
    }
  }, [navigate, user])
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(null);

    const user = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      password: e.target.password.value,
      passwordConfirmation: e.target.confirm_password.value,
      email: e.target.email.value,
    };

    try {
      await signup(user)
      navigate("/login");
    } catch (error) {
      console.log(error);
      setErrors(error);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">Geo Genius</h2>
                <p className=" mb-5">Please enter your details to join us!</p>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFirstName"
                    >
                      <Form.Label className="text-center">
                        First name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        placeholder="Enter name"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formLastName"
                    >
                      <Form.Label className="text-center">Last name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="Enter name"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUsername"
                    >
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formConfirmPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirm_password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </Button>
                  </div>
                  <Row className="m-3">
                    {errors && (
                      <Alert variant="danger">{errors?.message}</Alert>
                    )}
                  </Row>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary fw-bold">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
