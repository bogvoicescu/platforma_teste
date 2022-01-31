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
  
  document.onkeydown = function(e) {
  if(e.keyCode === 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
     return false;
  }
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
  return (
<div className='QuizContainer'>
    <div className="App noselect">
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
