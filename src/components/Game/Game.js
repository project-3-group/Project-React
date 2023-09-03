import { useEffect, useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useAuthCtx, useUser } from "../../contexts/authCtx";
import Score from "./Score";
import Map from "../Map/Map";
import allQuestions from "./allQuestions";
import countryData from "../../assets/country-data.json";
import "./Game.css";

function Game() {
  const [gameState, setGameState] = useState("play");
  const [allCountryData, setAllCountryData] = useState(null);
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const user = useUser();
  const { updateUserData } = useAuthCtx();

  const updateQuestion = useCallback(async () => {
    const createQuesFun = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    const question = await createQuesFun(allCountryData);
    setQuestion(question);
  }, [allCountryData]);

  const updateHighestScore = async () => {
    try {
      const serverURL = `${process.env.REACT_APP_SERVER_URL}/users/user`;
      const data = { hights_score: score + 1 };
      await axios.put(serverURL, data, { withCredentials: true });
      await updateUserData();
      console.log("user data updated");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectCountry = (countryData) => {
    const isAnswerCorrect =
      question?.answers.find((country) => country.cca2 === countryData.properties["Alpha-2"]) !==
      undefined;

    if (isAnswerCorrect) {
      handleOverlay("wright-answer");
      if (score + 1 > highestScore) {
        if (user) updateHighestScore();
        setHighestScore(score + 1);
      }
      setScore(score + 1);
    } else {
      setScore(0);
      handleOverlay("wrong-answer");
    }
    updateQuestion();
  };

  useEffect(() => {
    const getAllCountryData = async () => {
      // const serverURL = `${process.env.REACT_APP_SERVER_URL}/allcountry`;
      // const response = await axios.get(serverURL);
      setAllCountryData(countryData);
    };

    getAllCountryData();
  }, []);

  useEffect(() => {
    updateQuestion();
  }, [updateQuestion]);

  useEffect(() => {
    setHighestScore((score) => {
      if (user && user.highest_score !== score) {
        return user.highest_score;
      }
      return score;
    });
  }, [user]);

  const handleOverlay = (answerState) => {
    setGameState(answerState);
    setTimeout(() => {
      setGameState("play");
    }, 1200);
  };

  return (
    <div className="game">
      <div>
        <div className={"overlay " + gameState}>
          {gameState === "wrong-answer" && <p>Wrong Answer</p>}
          {gameState === "wright-answer" && <p>You are Correct</p>}
        </div>
        <Map onSelectCountry={handleSelectCountry} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "2rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <Card
          className="Qhover"
          style={{
            width: "50rem",
            height: "10rem",
            marginLeft: "10rem",
            marginBottom: "5rem",
            marginTop: "5rem",
          }}
        >
          <Card.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
              <div>{question?.Component}</div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Score highestScore={highestScore} score={score} />
      </div>
    </div>
  );
}

export default Game;
