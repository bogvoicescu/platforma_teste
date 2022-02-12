import React, {useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import {Questions} from "../Helpers/QuestionBank"
import "../App.css"
import TopNav from "./Nav/Nav";
import Footer from './Nav/Footer';
import Watermark from './Watermark/Watermark';
import logo from "./logo.png";


function EndScreen() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    
    const restartQuiz = () => {
        setScore(0);
        setGameState("teste");
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
            
                <h1>{`Ai terminat Testul Nr.${test+1}`}</h1>
                <h1>Întrebări Corecte: {score} / {Questions[test].length}</h1>
                <h2>Răspunsuri:</h2>
                <div className="optionsContainer">{questionList}</div>
            <div>
            </div>
            <div id="endQuestionBtn"><button className="nextBtn" onClick={restartQuiz}>Înapoi la Teste</button>
                <button className="nextBtn" onClick={()=>setGameState("menu")}>Înapoi la Meniul Principal</button></div>
                
            <Watermark />
            </div>
                
                <Footer/>
        </div>
    );
}

export default EndScreen;