import {React, useState, useContext} from 'react';
import './Nav.css';
import {QuizContext} from "../../Helpers/Context";

function Nav() {
    const {gameState, setGameState, test, setTest} = useContext(QuizContext);

    return(
<div className="nav">
    <ul className="navLinks">
    <li onClick={() => setGameState("menu")}>Meniu Principal
        </li> 
        <a href='https://devinopolitist.ro/produs/ghid-legsilativ-admitere-mai-2022/'>Cumpără Ghidul Legsilativ</a>
    {/* <a href="#contact">Contact</a> */}
    </ul>
                {/* <h3 className="testNr">{`Testul ${test+1}`}</h3>         */}
</div>
    )
}

export default Nav;