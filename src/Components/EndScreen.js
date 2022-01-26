import React, {useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import {Questions} from "../Helpers/QuestionBank"
import "../App.css"

function EndScreen() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className="EndScreen">
            <h1>Test Terminat</h1>
            <h3>{score} / {Questions[test].length}</h3>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
        <div>
            <h1>intrebare1</h1>
        </div>
            <button onClick={restartQuiz}>Încearcă Din Nou</button>
        </div>
    );
}

export default EndScreen;