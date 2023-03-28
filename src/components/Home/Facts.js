import { Card,Row,Col } from "react-bootstrap";
import Fact from "./Fact";
function Facts (props)
{
    const {facts} = props;
    if (facts)
    if (facts.length >0)
    return(
        <>
            <div>
                <h1> Facts </h1>
                <Card>
                    <Row>
                        {facts.map((fact) => {
                            return(
                                <Col sm={6} md={2}>
                                    <Fact fact={fact} />
                                </Col>
                            )
                        })}
                    </Row>
                </Card>
            </div>
        </>
    );
}
export default Facts;