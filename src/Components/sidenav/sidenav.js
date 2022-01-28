import {React, useState, useContext} from 'react';
import './sidenav.css';
import {QuizContext} from "../../Helpers/Context";

function Topnav() {
    const {gameState, setGameState, test, setTest} = useContext(QuizContext);

    return(
        <div class="topnav">
        <ul>
        <li onClick={() => setGameState("menu")}>Meniu Teste</li>  <a href='#'>Cumpără Ghidul Legislativ</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  </ul>
        
</div>
    )
}

export default Topnav;