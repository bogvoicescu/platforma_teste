import './App.css';
import React, {useState} from 'react';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import {QuizContext} from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [test, setTest] = useState(0);
  return (
<div className='QuizContainer'>
    <div className="App">
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, test, setTest}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  </div>
  );
}

export default App;
