import './AddFact.css'
import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import UpdateFact from './UpdateFact';
import FactCard from './FactCard';
import { useUser } from '../../contexts/authCtx';


function AddFact() {
    const [selected, setSelected] = useState("");
    const [factDataArr, setFactDataArr] = useState([]);
    const user = useUser();

    const addFactFunction = async (e) => {
        e.preventDefault();
        const obj = {
            "fact": e.target.fact.value,
            "country": selected
        }
        console.log(obj);
        const serverURl = `http://localhost:3002/addFact`
        const axiosRes = await axios.post(serverURl, obj, { withCredentials: true });
        await getFactFunction();

    }

    const getFactFunction = async () => {
        if(user===null)return
        const serverURl = `http://localhost:3002/getFactsbyUser/${user?.id}`
        const axiosRes = await axios.get(serverURl,{ withCredentials: true });
        setFactDataArr(axiosRes.data);
        console.log(axiosRes.data);

    }

    useEffect(() => {
        getFactFunction()
     }, [user])
    

    return (

        <>
            <h1 className='head'>Add Your Fact</h1>

            <Container className='Container mb-3'>
                <Form onSubmit={addFactFunction}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail" className='text'>
                            <Form.Label>Add Fact</Form.Label>
                            <Form.Control type='text' placeholder="Write Your Fact Here..." name="fact" />
                        </Form.Group>

                        <Form.Group as={Col} md={4} controlId="formGridPassword" className='drop'>
                            <Form.Label>Country</Form.Label>
                            <ReactFlagsSelect selected={selected} onSelect={(code) => setSelected(code)} className='deopCountry' />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" size="lg" className='btn' type="submit">Add</Button>
                </Form>
            </Container>
            {factDataArr.map((item)=>{
               return <FactCard factData={item} getFactFunction={getFactFunction} />
            })}
            
        </>
    )
}

export default AddFact;