import {React, useState, useContext} from 'react';
import './Nav.css';
import {QuizContext} from "../../Helpers/Context";

function Nav() {
    const {gameState, setGameState, test, setTest} = useContext(QuizContext);

    return(
<div className="nav">
<ul>
        <a href='https://devinopolitist-grile.ro/grile-admitere-mai/'>Meniul Principal</a>
        <a href='https://devinopolitist.ro/produs/ghid-legsilativ-admitere-mai-2022/'>Cumpără Ghidul Legsilativ</a>
    </ul>
                {/* <h3 className="testNr">{`Testul ${test+1}`}</h3>         */}
</div>
    )
}

export default Nav;