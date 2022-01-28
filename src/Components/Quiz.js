import React, {useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import {Questions} from '../Helpers/QuestionBank';
import Topnav from './sidenav/sidenav';

function Quiz() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [selectA, setSelectA] = useState("");
    const [selectB, setSelectB] = useState("");
    const [selectC, setSelectC] = useState("");
    const [selectD, setSelectD] = useState("");
    const [rightA, setRightA] = useState("");
    const [rightB, setRightB] = useState("");
    const [rightC, setRightC] = useState("");
    const [rightD, setRightD] = useState("");

    const nextQuestion = () => {
        if (Questions[test][currQuestion].answer === optionChosen){
            setScore(score+1);
        }
        setCurrQuestion(currQuestion + 1);
        resetAnswers();
    };
    const finishQuiz = () => {
        if(Questions[test][currQuestion].answer === optionChosen){
            setScore(score+ 1);
        }
        setGameState("endScreen");
    };
    const validate = () => {
        if (Questions[test][currQuestion].answer === "A"){
            setRightA("right");
            setRightB("wrong");            
            setRightC("wrong");
            setRightD("wrong");
        }else if (Questions[test][currQuestion].answer === "B"){
            setRightB("right");
                setRightC("wrong");            
                setRightD("wrong");
                setRightA("wrong");
        }else if (Questions[test][currQuestion].answer === "C") {
            setRightC("right");
            setRightD("wrong");            
            setRightA("wrong");
            setRightB("wrong");
        } else {
            setRightD("right");
            setRightA("wrong");            
            setRightB("wrong");
            setRightC("wrong");
        }
    }
    const selectAnswerA = () => {
        resetAnswers();
        validate();
        setSelectA("selectedAnswer");
    }   
    const selectAnswerB = () => {
        resetAnswers();
        validate();
        setSelectB("selectedAnswer")
    }   
    const selectAnswerC = () => {
        resetAnswers();
        validate();
        setSelectC("selectedAnswer")
    }   
    const selectAnswerD = () => {
        resetAnswers();
        validate();
        setSelectD("selectedAnswer");
    }
    const resetAnswers = () => {
        setOptionChosen("")
        setRightA("")
        setRightB("")
        setRightC("")
        setRightD("")
        setSelectA("");
        setSelectB("");
        setSelectC("");
        setSelectD("");
    }
    return (
        <div className='MenuContainer'>
        <Topnav />
        <div className="Quiz">
            <h2>{Questions[test][currQuestion].prompt}</h2>
                <div className="options">

                    <div id="btnWrap" className={selectA} onClick={() =>    setOptionChosen("A")}>
                    <button id={rightA} onClick={selectAnswerA}>{Questions[test][currQuestion].optionA}</button>
                    </div>
                    <div id="btnWrap" className={selectB} onClick={() =>    setOptionChosen("B")}>
                        <button id={rightB} onClick={selectAnswerB}>{Questions[test][currQuestion].optionB}</button>
                    </div>
                    <div id="btnWrap" className={selectC} onClick={() =>    setOptionChosen("C")}>
                        <button id={rightC} onClick={selectAnswerC}>{Questions[test][currQuestion].optionC}</button>
                    </div>
                    <div id="btnWrap" className={selectD} onClick={() =>    setOptionChosen("D")}>
                        <button id={rightD} onClick={selectAnswerD}>{Questions[test][currQuestion].optionD}</button>
                    </div>
                </div>
            {currQuestion === Questions[test].length - 1 ? (<button className="nextBtn" onClick={finishQuiz}>Termină Testul</button>) : (
            <button className="nextBtn" onClick={nextQuestion}>Întrebarea Următoare</button>    
            )}
            
        </div></div>
        
    );
}
export default Quiz;