import Card from 'react-bootstrap/Card';


function Score(props) {



    
    return (
        <div style={{ width: '10rem', height: '4rem', marginRight: '20rem', marginBottom:'5rem' , marginTop:'5rem'}}>
            <Card style={{ marginBottom: '0.5rem' , backgroundColor:'#0a2647', color: 'white'}}>
                <Card.Body style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    <i class="fa-solid fa-star" style={{ color:'#FFB100' }}>  {`${props.score.toString()}`}  </i>
                    {console.log(props.score)}
                </Card.Body>
            </Card>
            <Card style={{ marginBottom: '0.5rem' , backgroundColor:'#0a2647', color: 'white'}}>
                <Card.Body style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {`YOUR HIGHEST: ${props.highestScore}`}
                </Card.Body>
            </Card>

        </div>
    )
}
export default Score;