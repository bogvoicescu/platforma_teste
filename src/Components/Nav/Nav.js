import {React, useState, useContext} from 'react';
import './Nav.css';
import {QuizContext} from "../../Helpers/Context";

function Nav() {
    const {gameState, setGameState, test, setTest} = useContext(QuizContext);

    return(
<div class="nav">
    <ul>
        <li onClick={() => setGameState("menu")}>Meniu Teste
        </li>  
        <a href='https://devinopolitist.ro/produs/ghid-legsilativ-admitere-mai-2022/'>Cumpără Ghidul Legislativ</a>
    <a href="#contact">Contact</a>
    </ul>
        
</div>
    )
}

export default Nav;