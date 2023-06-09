import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import React, { useState } from "react";
import UpdateFact from './UpdateFact'
import {FaTrash,FaEdit} from 'react-icons/fa'
import './AddFact.css'
import lookup from 'country-code-lookup'


function FactCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteFact = async() => {
    
    const serverURl = `${process.env.REACT_APP_SERVER_URL}/deleteFact/${props.factData.id}`
    const axiosRes = await axios.delete(serverURl,{ withCredentials: true });
    await props.getFactFunction();
  }
    let countryName = props.factData.country;
    try {countryName = lookup.byIso(props.factData.country).country}
    catch (e) {console.log(e)}
  return (
    <>
    <Container className='cardCont'>
    <Card className="d-flex flex-row align-items-center">
      <Card.Body><h4>{props.factData.fact}</h4>
      {/* {console.log(lookup.byIso(props.factData.country))} */}
      <p>{countryName}</p>
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