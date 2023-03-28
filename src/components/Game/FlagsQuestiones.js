import Card from 'react-bootstrap/Card';


function FlagQus({flag}) {
    return (
      /*<div>
        <p>which country does this flag belongs to</p>
        <img src={flag} alt=''/>
      </div>*/
      <Card style={{ width: '50rem', height: '10rem', marginLeft: '10rem' }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
          <Card.Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              {flag && (
                  <div>
                      <img src={{flag}} alt="Flag" style={{ width: '5rem', textAlign: 'right', marginBottom: '1.5rem' }} />

                      <p>Which country does this flag belong to?</p>
                  </div>
              )}
          </Card.Text>
      </Card.Body>
  </Card>

    )
  }
  export default FlagQus;