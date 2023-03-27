//import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function FlagGame(props) {
    /*const [answerStatus, setAnswerStatus] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [currentFlag, setCurrentFlag] = useState(props.flag);

    function handleAnswerSubmit(e) {
        e.preventDefault();
        const correctAnswer = currentFlag.name.common.toLowerCase();
        const formattedUserAnswer = userAnswer.trim().toLowerCase();

        if (formattedUserAnswer === correctAnswer) {
            setAnswerStatus('correct');
        } else {
            setAnswerStatus('incorrect');
        }
    }*/

    /*function handleNextFlag() {
        setAnswerStatus('');
        setUserAnswer('');
        if (props.countries.length > 0) {
            const newFlag = getRandomFlag(props.countries);
            setCurrentFlag(newFlag);
        }
    }*/

    /*function getRandomFlag(countries) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
    }*/


    return (

        <Card style={{ width: '50rem', height: '10rem', marginLeft: '10rem' }}>
            <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
                <Card.Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {props.flag && (
                        <div>
                            <img src={props.flag.flags.png} alt="Flag" style={{ width: '5rem', textAlign: 'right', marginBottom: '1.5rem' }} />

                            <p>Which country does this flag belong to?</p>
                        </div>
                    )}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default FlagGame;