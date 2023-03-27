import "./Login.css";
import { Col, Button, Row, Container, Card, Form , Alert } from "react-bootstrap";
import { useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useUser,useAuthCtx } from "../../contexts/authCtx";

function Login() {
  const navigate = useNavigate()
  const user = useUser()
  const {login , loginError: errors,loginLoading : loading} = useAuthCtx();

  useEffect(() => {
    if(user !== null){
      return navigate('/')
    }
  }, [navigate, user])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
      const email =  e.target.email.value;
      const password=  e.target.password.value;

      await login(email,password)
  };
  
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center login-form-container" >
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">Geo Genius</h2>
                <p className=" mb-5">Please enter your email and password!</p>
                <Form className="mb-3" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required minLength={8}/>
                  </Form.Group>
                  {/* <div className="mb-3">
                <p className="small">
                  <a className="text-primary" href="#!">
                    Forgot password?
                  </a>
                </p>
              </div> */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit" disabled={loading}>
                      {loading ? 'Logging...': "Login" }
                    </Button>
                  </div>
                </Form>
                <Row className="m-3">
                    {errors && (
                      <Alert variant="danger">{errors?.message}</Alert>
                    )}
                  </Row>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary fw-bold">
                      Sign Up
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
}
export default Login;
