import './AddFact.css'
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function AddFact() {
    const [selected, setSelected] = useState("");

    return (

        <>
            <h1 className='head'>Add Your Fact</h1>

            <Container fluid className='Container'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className='text'>
                        <Form.Label>Add Fact</Form.Label>
                        <Form.Control type='text' placeholder="Write Your Fact Here..." />
                    </Form.Group>

                    <Form.Group as={Col} md={4} controlId="formGridPassword" className='drop'>
                        <Form.Label>Country</Form.Label>
                        <ReactFlagsSelect selected={selected} onSelect={(code) => setSelected(code)} className='deopCountry' />
                    </Form.Group>
                </Row>
                <Button variant="primary" size="lg" className='btn'>Add</Button>
            </Container>


        </>
    )
}

export default AddFact;