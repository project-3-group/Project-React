import { Card, Row, Col } from "react-bootstrap";
import Fact from "./Fact";
function Facts(props) {
    const { facts } = props;
    if (facts)
        // if (facts.length >0)
        return (
            <>
                <div className="container">
                    <h1 style={{color:"var(--blue-90)"}}> Facts </h1>
                    {(facts.length>0 ?
                    <Card>
                        <Row>
                            {facts.map((fact) => {
                                return (
                                    <Col sm={6} md={4}>
                                        <Fact fact={fact} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Card>
                    : <h3> No facts added, Add one 😎 </h3>
                    )}
                </div>
            </>
        );
}
export default Facts;