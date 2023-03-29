import { Card } from "react-bootstrap";
import './Fact.css'
function Fact(props) {
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Body>
    //     {/* <Card.Title>Card Title</Card.Title> */}
    //     {/* <Card.Subtitle classNameName="mb-2 text-muted">By {}</Card.Subtitle> */}
    //     <Card.Text>
    //         {props.fact.fact}
    //     </Card.Text>
    //     {/* <Card.Link href="#">Another Link</Card.Link> */}
    //   </Card.Body>
    // </Card>
    <>
      <div className="FactContainer">
        <div className="card1" href="#">
          <h3>{`${props.fact.first_name} ${props.fact.last_name}`}  </h3>
          <p className="small">{props.fact.fact}</p>
          <div className="go-corner" href="#">
            <div className="go-arrow">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fact;