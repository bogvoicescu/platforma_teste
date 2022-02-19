import React, { useContext } from "react";
import {QuizContext} from "../../../Helpers/Context";
import "../../../App.css";
import { useState } from "react";
import { Questions } from "../../../Helpers/QuestionBank";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import logo from "../../logo.png";
import "../MainCat.css";


function T31to40() {
    const {gameState, setGameState, test, setTest} = useContext(QuizContext);
    const lista = (nr) => {
        setTest(nr)
        setGameState("quiz");
    }
    return (
<div className="MenuContainer">
<Nav/>
            <div  className="Menu Test">
            <div className='MainCat'>

                <button className='MainCatBtn'
            onClick= {() => lista(30)} 
            >Testul 31</button>
                <button className='MainCatBtn'
            onClick= {() => lista(31)} 
            >Testul 32</button>
                <button className='MainCatBtn'
            onClick= {() => lista(32)} 
            >Testul 33</button>
                <button className='MainCatBtn'
            onClick= {() => lista(33)} 
            >Testul 34</button>
                <button className='MainCatBtn'
            onClick= {() => lista(34)} 
            >Testul 35</button>
                <button className='MainCatBtn'
            onClick= {() => lista(35)} 
            >Testul 36</button>
                <button className='MainCatBtn'
            onClick= {() => lista(36)} 
            >Testul 37</button>
                <button className='MainCatBtn'
            onClick= {() => lista(37)} 
            >Testul 38</button>
                <button className='MainCatBtn'
            onClick= {() => lista(38)} 
            >Testul 39</button>
                <button className='MainCatBtn'
            onClick= {() => lista(39)} 
            >Testul 40</button>
            </div>
            <button onClick={()=>setGameState("testlist")} className='back'>Înapoi</button>
            </div>
            <Footer />
            </div>
    );
}

export default T31to40;