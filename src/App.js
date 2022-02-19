import './App.css';
import React, {useState} from 'react';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import {QuizContext} from "./Helpers/Context";
import CatI from "./Components/Categories/CatI";
import CatII from './Components/Categories/CatII';
import CatIII from './Components/Categories/CatIII';
import TestList from './Components/Categories/TestList';
import CatI1 from './Components/Categories/CatI1';
import CatI6 from './Components/Categories/CatI6';
import CatI7 from './Components/Categories/CatI7';
import CatI2 from './Components/Categories/CatI2';
import CatI3 from './Components/Categories/CatI3';
import CatI4 from './Components/Categories/CatI4';
import CatI5 from './Components/Categories/CatI5';
import CatII1 from './Components/Categories/CatII1';
import CatII2 from './Components/Categories/CatII2';
import CatIII1 from './Components/Categories/CatIII1';
import CatIII1p1 from './Components/Categories/CatIII1p1';
import CatIII1p2 from './Components/Categories/CatIII1p2';
import CatIII2 from './Components/Categories/CatIII2';
import CatIII2p1 from './Components/Categories/CatIII2p1';
import CatIII2p2 from './Components/Categories/CatIII2p2';
import T1to10 from './Components/Categories/testnr/T1to10';
import T11to20 from './Components/Categories/testnr/T11to20';
import T21to30 from './Components/Categories/testnr/T21to30';
import T31to40 from './Components/Categories/testnr/T31to40';
import T41to50 from './Components/Categories/testnr/T41to50';
import T51to60 from './Components/Categories/testnr/T51to60';
import T61to70 from './Components/Categories/testnr/T61to70';

function App() {
  const [gameState, setGameState] = useState("testlist");
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
        {gameState === "testlist" && <TestList />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "cati" && <CatI />}
        {gameState === "cati1" && <CatI1 />}
        {gameState === "cati2" && <CatI2 />}
        {gameState === "cati3" && <CatI3 />}
        {gameState === "cati4" && <CatI4 />}
        {gameState === "cati5" && <CatI5 />}
        {gameState === "cati6" && <CatI6 />}
        {gameState === "cati7" && <CatI7 />}
        {gameState === "catii" && <CatII />}
        {gameState === "catii1" && <CatII1 />}
        {gameState === "catii2" && <CatII2 />}
        {gameState === "catiii" && <CatIII />}
        {gameState === "catiii1" && <CatIII1 />}
        {gameState === "catiii1p1" && <CatIII1p1 />}
        {gameState === "catiii1p2" && <CatIII1p2 />}
        {gameState === "catiii2" && <CatIII2 />}
        {gameState === "catiii2p1" && <CatIII2p1 />}
        {gameState === "catiii2p2" && <CatIII2p2 />}
        {gameState === "t1to10" && <T1to10 />}
        {gameState === "t11to20" && <T11to20 />}
        {gameState === "t21to30" && <T21to30 />}
        {gameState === "t31to40" && <T31to40 />}
        {gameState === "t41to50" && <T41to50 />}
        {gameState === "t51to60" && <T51to60 />}
        {gameState === "t61to70" && <T61to70 />}
      </QuizContext.Provider>
    </div>
  </div>
  );
}

export default App;
