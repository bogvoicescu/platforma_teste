import React, {useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import {Questions} from "../Helpers/QuestionBank";

function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [selectA, setSelectA] = useState("");
    const [selectB, setSelectB] = useState("");
    const [selectC, setSelectC] = useState("");
    const [selectD, setSelectD] = useState("");

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen){
            setScore(score+1);
        }
        setCurrQuestion(currQuestion + 1);
        resetAnswers();
    };
    const finishQuiz = () => {
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score+ 1);
        }
        setGameState("endScreen");
    };
    const selectAnswerA = () => {
        resetAnswers();
        console.log("Răspuns A selectat!");
        setSelectA("selectedAnswer");

    }
    const selectAnswerB = () => {
        resetAnswers();
        console.log("Răspuns B selectat!");
        setSelectB("selectedAnswer");

    }
    const selectAnswerC = () => {
        resetAnswers();
        console.log("Răspuns C selectat!");
        setSelectC("selectedAnswer");
    }
    const selectAnswerD = () => {
        resetAnswers();
        console.log("Răspuns D selectat! ");
        setSelectD("selectedAnswer");
    }
    const resetAnswers = () => {
        setSelectA("");
        setSelectB("");
        setSelectC("");
        setSelectD("");
    }
    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
                <div className="options">
                    <div className={selectA} onClick={selectAnswerA} >
                    <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
                    </div>
                    <div className={selectB} onClick={selectAnswerB}>
                        <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
                    </div>
                    <div className={selectC} onClick={selectAnswerC}>
                        <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
                    </div>
                    <div className={selectD} onClick={selectAnswerD}>
                        <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
                    </div>
                </div>
            {currQuestion === Questions.length - 1 ? (<button onClick={finishQuiz}>Termină Testul</button>) : (
            <button onClick={nextQuestion}>Întrebarea Următoare</button>    
            )}
            
        </div>
    );
}
export default Quiz;