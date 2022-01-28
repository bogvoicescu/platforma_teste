import React, {useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import {Questions} from "../Helpers/QuestionBank"
import "../App.css"
import TopNav from "../Components/sidenav/sidenav"


function EndScreen() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }
 
    const questionList = Questions[test].map(question =>
    
    <div>
    <hr></hr>
    <h2>{question.prompt}</h2>
        <div className="options">

            <div id="btnWrap">
                <button id={question.answer === "A" ? "right" : "wrong"}>{question.optionA}</button>
            </div>
            
            <div id="btnWrap">
                <button id={question.answer === "B" ? "right" : "wrong"} >{question.optionB}</button>
            </div>
                
            <div id="btnWrap">
                <button id={question.answer === "C" ? "right" : "wrong"} >{question.optionC}</button>
            </div>
                
            <div id="btnWrap">
                <button id={question.answer === "D" ? "right" : "wrong"}>{question.optionD}</button>
            </div>
                
        </div>
        </div>)
    return (

        <div className="MenuContainer">
        <TopNav/>
        <div className="EndScreen">
            <h1>Test Terminat</h1>
            <h3>{score} / {Questions[test].length}</h3>
        <div>
            {questionList}
        </div>
            <button id='endQuestionBtn' onClick={restartQuiz}>Încearcă Din Nou</button>
        </div>
        </div>
    );
}

export default EndScreen;