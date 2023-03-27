import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import allQuestions from './Questions/allQuestions'
import countryData from '../../assets/country-data.json'


function Game() {
  const [question, setQuestion] = useState(null)

  const getRandomQuestion =async () => {
    const createQuesFun = allQuestions[Math.floor(Math.random() * allQuestions.length)]
    const question = await createQuesFun(countryData);
    setQuestion(question)
  }

  useEffect(() => {
    getRandomQuestion();
  },[])

  if(question === null) return <p>no question</p>

  return (
    <div>{question.Component}</div>
  )
}

export default Game