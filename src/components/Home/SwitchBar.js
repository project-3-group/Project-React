import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function SwitchBar(props) {
    return (
        <>
                <Navbar expand="lg" variant="light" bg="secondary">
                    <Container>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="show country name on hover"
                                onChange={(event) => props.onChange(event.target.checked)}
                            />
                        </Form>
                    </Container>
                </Navbar>
        </>
    )
}
export default SwitchBar;
