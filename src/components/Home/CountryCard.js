import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CountryCard.css';
// import flag from '../../assest/flag.png';
// import { useState, useEffect } from 'react';
import { MdLocationCity } from 'react-icons/md';
// import {AiFillDollarCircle} from 'react-icons/ai';
import { BsCurrencyDollar, BsFlag } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { IoIosPeople, IoMdTime } from 'react-icons/io';



function CountryCard(props) {

    const cardStyle = {
        border: 'none',
        borderRight: '1px solid #ccc'
    };
    // const [allContriesData, setAllContriesData] = useState(null);
    // useEffect(() => {
    //     const sendRequest = async () => {
    //         const serverUrl = process.env.REACT_APP_SERVER_URL;
    //         const response = await fetch(serverUrl + '/allcountry');
    //         const responseData = await response.json();
    //         setAllContriesData(responseData);
    //         console.log(responseData);
    //     }
    //     sendRequest();
    // }, [])

    if (!props.countryData) {
        return <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <h1>Click on a country to see more information</h1>
        </div>

    } else {
        const currencyData = props.countryData.currencies || {};
        const currencyKeys = Object.keys(currencyData);
        const currencyName = currencyKeys.length > 0 ? currencyData[currencyKeys[0]].name : 'No official currency';
        const currencySymbol = currencyKeys.length > 0 ? currencyData[currencyKeys[0]].symbol : '';
        const populationFormatted = props.countryData.population.toLocaleString('en-US', { useGrouping: true });

        return (
            // <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            //     <Card>
            //         <Card.Title><h1>{props.countryData.name.common}</h1></Card.Title>
            //         <div>
            //             <Row>
            //                 <Col sm={6} md={2}>
            //                     <Card style={cardStyle}>
            //                         <Card.Body>
            //                             <Card.Title>Capital</Card.Title>
            //                             <Card.Text>
            //                                 {props.countryData.capital?
            //                                 props.countryData.capital
            //                                 : 'No official capital'}
            //                             </Card.Text>
            //                         </Card.Body>
            //                     </Card>
            //                 </Col>
            //                 <Col sm={6} md={2}>
            //                     <Card style={cardStyle}>
            //                         <Card.Body>
            //                             <Card.Title>Currency</Card.Title>
            //                             <Card.Text>
            //                                 { currencyName?
            //                                 `${currencyName} '${currencySymbol}'`
            //                                 : 'No official currency'}
            //                             </Card.Text>
            //                         </Card.Body>
            //                     </Card>
            //                 </Col>
            //                 <Col sm={6} md={2}>
            //                     <Card style={cardStyle}>
            //                         <Card.Body>
            //                             <Card.Title>Languages</Card.Title>
            //                             <Card.Text>
            //                                 {(props.countryData.languages?
            //                                 Object.values(props.countryData.languages).join(', ')
            //                                 : 'No official language')}
            //                             </Card.Text>
            //                         </Card.Body>
            //                     </Card>
            //                 </Col>
            //                 <Col sm={6} md={2}>
            //                     <Card style={cardStyle}>
            //                         <Card.Body>
            //                             <Card.Title>Population</Card.Title>
            //                             <Card.Text>
            //                                 {populationFormatted}
            //                             </Card.Text>
            //                         </Card.Body>
            //                     </Card>
            //                 </Col>
            //                 <Col sm={6} md={2}>
            //                     <Card style={cardStyle}>
            //                         <Card.Body>
            //                             <Card.Title>Timezones </Card.Title>
            //                             <Card.Text>
            //                                 {props.countryData.timezones.join(', ')}
            //                             </Card.Text>
            //                         </Card.Body>
            //                     </Card>
            //                 </Col>

            //                 <Col sm={6} md={2}>
            //                     <Card style={{ ...cardStyle, borderRight: 'none' }}>
            //                         <Card.Body>
            //                             <Card.Img variant="top" src={props.countryData.flags['png']} />
            //                         </Card.Body>
            //                     </Card>
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Card>
            //                     <Card.Body>{props.countryData.overview}</Card.Body>
            //                 </Card>
            //             </Row>
            //         </div>
            //     </Card>
            // </div>

            //     <section>

            //     </section>
            // <section >

                <div class="row" id='country-card'>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                {/* <i class="fas fa-hammer"></i> */}
                                <MdLocationCity />
                            </div>
                            <h3>Capital</h3>
                            <p>
                                {props.countryData.capital ?
                                    props.countryData.capital
                                    : 'No official capital'}
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <BsCurrencyDollar />
                                {/* <i class="fas fa-brush"></i> */}
                            </div>
                            <h3>Currency</h3>
                            <p>
                                {currencyName ?
                                    `${currencyName} '${currencySymbol}'`
                                    : 'No official currency'}
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <IoLanguageOutline />
                            </div>
                            <h3>Languages</h3>
                            <p>
                                {(props.countryData.languages ?
                                    Object.values(props.countryData.languages).join(', ')
                                    : 'No official language')}

                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <IoIosPeople />
                            </div>
                            <h3>Population</h3>
                            <p>
                                {populationFormatted}
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <IoMdTime />
                            </div>
                            <h3>Timezones</h3>
                            <p>
                                {props.countryData.timezones.join(', ')}
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <BsFlag />
                            </div>
                            <h3>Flag</h3>
                            <p>
                                <Card.Img variant="top" src={props.countryData.flags['png']} />
                            </p>
                        </div>
                    </div>
                </div>
            // </section>
            
        );
    }
}

export default CountryCard;
