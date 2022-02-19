import React, { useContext } from "react";
import {QuizContext} from "../../../Helpers/Context";
import "../../../App.css";
import { useState } from "react";
import { Questions } from "../../../Helpers/QuestionBank";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import logo from "../../logo.png";
import "../MainCat.css";


function T41to50() {
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
            onClick= {() => lista(40)} 
            >Testul 41</button>
                <button className='MainCatBtn'
            onClick= {() => lista(41)} 
            >Testul 42</button>
                <button className='MainCatBtn'
            onClick= {() => lista(42)} 
            >Testul 43</button>
                <button className='MainCatBtn'
            onClick= {() => lista(43)} 
            >Testul 44</button>
                <button className='MainCatBtn'
            onClick= {() => lista(44)} 
            >Testul 45</button>
                <button className='MainCatBtn'
            onClick= {() => lista(45)} 
            >Testul 46</button>
                <button className='MainCatBtn'
            onClick= {() => lista(46)} 
            >Testul 47</button>
                <button className='MainCatBtn'
            onClick= {() => lista(47)} 
            >Testul 48</button>
                <button className='MainCatBtn'
            onClick= {() => lista(48)} 
            >Testul 49</button>
                <button className='MainCatBtn'
            onClick= {() => lista(49)} 
            >Testul 50</button>
            </div>
            <button onClick={()=>setGameState("testlist")} className='back'>Înapoi</button>
            </div>
            <Footer />
            </div>
    );
}

export default T41to50;