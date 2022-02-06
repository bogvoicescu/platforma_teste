import React, {useState} from 'react';
import { useContext } from "react";
import {QuizContext} from "../../Helpers/Context";
import "./MainCat.css";
import "../../App.css"
import { Questions } from "../../Helpers/QuestionBank";
import Nav from "../Nav/Nav";
import Footer from "../Nav/Footer";
import CatI from "../Categories/CatI";
import CatII from "../Categories/CatII";
import CatIII from "../Categories/CatIII";

const MainCat = () => {
    const {gameState, setGameState, test, setTest, score, setScore} = useContext(QuizContext);
    return (
        <div className='MainCat'>
        <button onClick= {() => setGameState("capi")} className='MainCatBtn'>Cap. I. Legislație specifică M.A.I.</button>
        <button onClick= {() => setGameState("capii")} className='MainCatBtn'>Cap. II. Instituții politice ale statului</button>
        <button onClick= {() => setGameState("capiii")} className='MainCatBtn'>Cap. III. Educație civică și cetățenească</button>
        <button onClick= {() => setGameState("quiz")} className='MainCatBtn'>Teste Grilă</button>
        </div>
    );
};

export default MainCat;