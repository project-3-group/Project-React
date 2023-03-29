import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import allQuestions from './allQuestions';
import countryData from './country-data.json';
//import Questione from './Questione';
import axios from 'axios';
import Score from './Score';
import Map from './Map';
import Card from 'react-bootstrap/Card';


function Game() {
  const [question, setQuestion] = useState(null);
  const [highestScore, setHighestScore] = useState(0);
  const [getanswer, setgetanswer] = useState("");
  const [score, setScore] = useState(0);
  const [countries, setCountries] = useState([]);
  const [flag, setFlag] = useState(null);

  const getRandomQuestion = async () => {
    const createQuesFun = allQuestions[Math.floor(Math.random() * allQuestions.length)]
    const question = await createQuesFun(countryData);
    setQuestion(question)
    setgetanswer(question.answers);
  }
  const handleAnswerSubmit = (answer) => {
    console.log(answer);
    if (answer === getanswer) {
      setScore(score + 1);
    } else if (score !== 0 ) {
      setScore(score - 1);
    }
    handleScoreChange(score);
    setFlag(getRandomQuestion(countries));
    //fetchData();
  };


  const fetchHighestScore = async () => {

    const serverURL = `http://localhost:3002/users/user`;
    const response = await axios.get(serverURL, { withCredentials: true });
    setHighestScore(response.data.highestScore);

  };

  const handleScoreChange = (newScore) => {
    if (newScore > highestScore) {
      setHighestScore(newScore);
      updateHighestScore();
    }
  };

  const updateHighestScore = async () => {
    const serverURL = `http://localhost:3002/users/user`;
    const response = await axios.put(serverURL, { highestScore });
    console.log(response.data);
    setHighestScore(response);
  };

  useEffect(() => {
    getRandomQuestion();
  }, [])

  if (question === null) return <p>no question</p>

  return (
    <div >
      <div> <Map onSelectCountry={handleAnswerSubmit} /> </div>
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

        
        <Score highestScore={highestScore} score={score} />
      </div>
    </div>


  )
}

export default Game;

/*import React, { useEffect, useState } from 'react';
import Questione from './Questione';
import axios from 'axios';
import Score from './Score';
import Map from './Map';


function Game() {
  const endpoint = 'https://restcountries.com/v3.1/all?fields=name,flags';
  const [countries, setCountries] = useState([]);
  const [flag, setFlag] = useState(null);
  const [highestScore, setHighestScore] = useState(null);
  //const [getanswer, setgetanswer] = useState("");
  const [score, setScore] = useState(0);

  const fetchData = async () => {
    const response = await axios.get(endpoint);
    const data = response.data;
    setCountries(data);
    setFlag(getRandomFlag(data));
  };

  function getRandomFlag(countries) {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  }

  const handleAnswerSubmit = (answer) => {
    console.log(answer);
    if (answer === flag.name.common) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    handleScoreChange(score);
    setFlag(getRandomFlag(countries));
    //fetchData();
  };


  const fetchHighestScore = async () => {

    const serverURL = `http://localhost:3002/users/user`;
    const response = await axios.get(serverURL, { withCredentials: true });
    setHighestScore(response.data.highestScore);

  };

  const handleScoreChange = (newScore) => {
    if (newScore > highestScore) {
        setHighestScore(newScore);
        updateHighestScore();
    }
  };

  const updateHighestScore = async () => {
      const serverURL = `http://localhost:3002/users/user`;
      const response = await axios.put(serverURL, { highestScore });
      console.log(response.data);
      setHighestScore(response);
};

  useEffect(() => {
    fetchData();
    fetchHighestScore();
  }, [])

  return (
    <>
      <div> <Map submitAnswer={handleAnswerSubmit} /> </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' , margin:'2rem'}}>

        <Questione flag={flag} />

        <Score highestScore={highestScore} score={score} />
      </div>
    </>
  )
}

export default Game;*/
