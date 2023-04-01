import axios from 'axios';
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateFact(props) {
    const [selected, setSelected] = useState("");


    const update = async (e) => {
        e.preventDefault();
        const obj = {
            "fact": e.target.fact.value,
            "country": selected
        }
        const serverURl = `${process.env.REACT_APP_SERVER_URL}/getFactsbyID/${props.factData.id}`
        const axiosRes = await axios.put(serverURl, obj, { withCredentials: true });
        await props.getFactFunction();
        props.handleClose();
    }
    return (
        <>


            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form onSubmit={update}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Fact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>



                        <Form.Group as={Col} controlId="formGridEmail" className='text'>
                            <Form.Label>Add Fact</Form.Label>
                            <Form.Control type='text' placeholder="Write Your Fact Here..." name="fact" defaultValue={props.factData.fact} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword" className='drop'>
                            <Form.Label>Country</Form.Label>
                            <ReactFlagsSelect selected={selected} onSelect={(code) => setSelected(code)} className='deopCountry' defaultValue={props.factData.country} />
                        </Form.Group>




                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className='btn' type="submit">Update</Button>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>


        </>
    )
}

export default UpdateFact