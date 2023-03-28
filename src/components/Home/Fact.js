import { Card,Row,Col } from "react-bootstrap";
function Fact(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        {/* <Card.Subtitle className="mb-2 text-muted">By {}</Card.Subtitle> */}
        <Card.Text>
            {props.fact.fact}
        </Card.Text>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}
export default Fact;