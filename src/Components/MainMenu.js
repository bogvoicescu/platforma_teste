import React, { useContext } from "react";
import {QuizContext} from "../Helpers/Context";
import "../App.css"
import { useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import Nav from "./Nav/Nav";
import Footer from "./Nav/Footer";
import logo from "./logo.png";
import CatI from "./Categories/CatI";
import CatII from "./Categories/CatII";
import CatIII from "./Categories/CatIII";

function MainMenu() {
    const {gameState, setGameState, test, setTest, score, setScore} = useContext(QuizContext);
    // const lista = (nr) => {
    //     setTest(nr)
    //     setGameState("quiz");
    // }
    return (
<div className="MenuContainer">

    <Nav/>
    <div className="Menu">
        <div className='MainCat'>
            <button onClick= {() => setGameState("cati")} className='MainCatBtn'><b>Cap. I.</b> Legislație specifică M.A.I.</button>
            <button onClick= {() => setGameState("catii")} className='MainCatBtn'><b>Cap. II.</b> Instituții politice ale statului</button>
            <button onClick= {() => setGameState("catiii")} className='MainCatBtn'><b>Cap. III.</b> Educație civică și cetățenească</button>
            <button onClick= {() => setGameState("teste")} className='MainCatBtn'><b>Teste Grilă</b></button>
        </div>
    </div>
    <Footer />
</div>
    );
}

export default MainMenu;