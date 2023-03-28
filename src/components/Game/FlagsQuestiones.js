import Card from 'react-bootstrap/Card';


function FlagQus({ flag }) {
  return (
    /*<div>
      <p>which country does this flag belongs to</p>
      <img src={flag} alt=''/>
    </div>*/


    <div>
      <img src={{ flag }} alt="Flag" style={{ width: '5rem', textAlign: 'right', marginBottom: '1.5rem' }} />

      <p>Which country does this flag belong to?</p>
    </div>


  )
}
export default FlagQus;