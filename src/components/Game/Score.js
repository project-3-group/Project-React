import Card from 'react-bootstrap/Card';


function Score(props) {


    return (
        <div style={{ width: '10rem', height: '4rem', marginRight: '20rem' }}>
            <Card style={{ marginBottom: '0.5rem' }}>
                <Card.Body style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {`SCORE: ${props.score.toString()}`}
                    {console.log(props.score)}
                </Card.Body>
            </Card>
            <Card style={{ marginBottom: '0.5rem' }}>
                <Card.Body style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {`YOUR HIGHEST: ${props.highestScore}`}
                </Card.Body>
            </Card>

        </div>
    )
}
export default Score;