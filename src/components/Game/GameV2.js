import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { useUser } from '../../contexts/authCtx';
import Score from './Score';
import Map from './Map';
import allQuestions from './allQuestions';


function Game() {
  const [allCountryData, setAllCountryData] = useState(null)
  const [question, setQuestion] = useState(null)
  const [score, setScore] = useState(0)

  const user = useUser()

  const updateQuestion =  async () => {
    const createQuesFun = allQuestions[Math.floor(Math.random() * allQuestions.length)]
    const question = await createQuesFun(allCountryData);
    setQuestion(question)
  }

  const handleSelectCountry = (countryData) => {
    console.log(countryData);
  }

  useEffect(() => {
    updateQuestion()
  }, [allCountryData])

  useEffect(() => {
    const getAllCountryData = async () => {
      const serverURL = `http://localhost:3002/allcountry`;
      const response = await axios.get(serverURL);
      setAllCountryData(response.data.highestScore); 
    }

    getAllCountryData();
  },[])
  

  if (question === null) return <p>no question</p>

  return (
    <div >
      <div> <Map onSelectCountry={handleSelectCountry} /> </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
        <Card style={{ width: '50rem', height: '10rem', marginLeft: '10rem' }}>
          <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
            <Card.Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              <div>
                <p> {question.Component} </p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        
        <Score highestScore={user.highest_score} score={score} />
      </div>
    </div>


  )
}

export default Game;
