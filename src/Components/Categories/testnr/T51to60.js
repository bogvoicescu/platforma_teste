import React, { useContext } from "react";
import {QuizContext} from "../../../Helpers/Context";
import "../../../App.css";
import { useState } from "react";
import { Questions } from "../../../Helpers/QuestionBank";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import logo from "../../logo.png";
import "../MainCat.css";


function T51to60() {
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
            onClick= {() => lista(50)} 
            >Testul 51</button>
                <button className='MainCatBtn'
            onClick= {() => lista(51)} 
            >Testul 52</button>
                <button className='MainCatBtn'
            onClick= {() => lista(52)} 
            >Testul 53</button>
                <button className='MainCatBtn'
            onClick= {() => lista(53)} 
            >Testul 54</button>
                <button className='MainCatBtn'
            onClick= {() => lista(54)} 
            >Testul 55</button>
                <button className='MainCatBtn'
            onClick= {() => lista(55)} 
            >Testul 56</button>
                <button className='MainCatBtn'
            onClick= {() => lista(56)} 
            >Testul 57</button>
                <button className='MainCatBtn'
            onClick= {() => lista(57)} 
            >Testul 58</button>
                <button className='MainCatBtn'
            onClick= {() => lista(58)} 
            >Testul 59</button>
                <button className='MainCatBtn'
            onClick= {() => lista(59)} 
            >Testul 60</button>
            </div>
            <button onClick={()=>setGameState("testlist")} className='back'>Înapoi</button>
            </div>
            <Footer />
            </div>
    );
}

export default T51to60;