import './App.css';
import React, {useState} from 'react';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import {QuizContext} from "./Helpers/Context";
import CatI from "./Components/Categories/CatI";
import CatII from './Components/Categories/CatII';
import CatIII from './Components/Categories/CatIII';
import Teste from './Components/Categories/Teste';
import CatI1 from './Components/Categories/CatI1';
import CatI6 from './Components/Categories/CatI6';
import CatI7 from './Components/Categories/CatI7';
import CatI2 from './Components/Categories/CatI2';
import CatI3 from './Components/Categories/CatI3';
import CatI4 from './Components/Categories/CatI2';
import CatI5 from './Components/Categories/CatI3';
import CatII1 from './Components/Categories/CatII1';
import CatII2 from './Components/Categories/CatII2';
import CatIII1 from './Components/Categories/CatIII1';
import CatIII1p1 from './Components/Categories/CatIII1p1';
import CatIII1p2 from './Components/Categories/CatIII1p2';
import CatIII2 from './Components/Categories/CatIII2';
import CatIII2p1 from './Components/Categories/CatIII2p1';
import CatIII2p2 from './Components/Categories/CatIII2p2';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [test, setTest] = useState(0);
  
//   document.onkeydown = function(e) {
//   if(e.keyCode === 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
//      return false;
//   }
// }
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });
  return (
<div className='QuizContainer'>
    <div className="App noselect">
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, test, setTest}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "teste" && <Teste />}
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
        {gameState === "catiii2p2" && <CatIII2p1 />}
      </QuizContext.Provider>
    </div>
  </div>
  );
}

export default App;
