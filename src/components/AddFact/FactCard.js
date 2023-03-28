import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import React, { useState } from "react";
import UpdateFact from './UpdateFact'
import {FaTrash,FaEdit} from 'react-icons/fa'
import './AddFact.css'


function FactCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteFact = async() => {
    
    const serverURl = `http://localhost:3002/deleteFact/${props.factData.id}`
    const axiosRes = await axios.delete(serverURl,{ withCredentials: true });
    await props.getFactFunction();
  }

  return (
    <>
    <Container>
    <Card className="d-flex flex-row align-items-center">
      <Card.Body><h4>{props.factData.fact}</h4>
      <p>{props.factData.country}</p>
      </Card.Body>

      <FaTrash className='iconBtn2'onClick={deleteFact}/>
      <FaEdit className='iconBtn' onClick={handleShow}/>
    </Card>
    </Container>
    <UpdateFact handleShow={handleShow} handleClose={handleClose} show={show} factData={props.factData} getFactFunction={props.getFactFunction}/>
    </>
  )
}

export default FactCard