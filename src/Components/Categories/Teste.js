import React, { useContext } from "react";
import {QuizContext} from "../../Helpers/Context";
import "../../App.css";
import { useState } from "react";
import { Questions } from "../../Helpers/QuestionBank";
import Nav from "../Nav/Nav";
import Footer from "../Nav/Footer";
import logo from "../logo.png";
import "./MainCat.css";


function Teste() {
    const {gameState, setGameState, test, setTest} = useContext(QuizContext);
    const lista = (nr) => {
        setTest(nr)
        setGameState("quiz");
    }
    return (
<div className="MenuContainer">
<Nav/>
            <div  className="Menu Test">
                <button className='MainCatBtn'
            onClick= {() => lista(0)} 
            >Testul 1</button>
                <button className='MainCatBtn'
            onClick= {() => lista(1)} 
            >Testul 2</button>
                <button className='MainCatBtn'
            onClick= {() => lista(2)} 
            >Testul 3</button>
                <button className='MainCatBtn'
            onClick= {() => lista(3)} 
            >Testul 4</button>
                <button className='MainCatBtn'
            onClick= {() => lista(4)} 
            >Testul 5</button>
                <button className='MainCatBtn'
            onClick= {() => lista(5)} 
            >Testul 6</button>
                <button className='MainCatBtn'
            onClick= {() => lista(6)} 
            >Testul 7</button>
                <button className='MainCatBtn'
            onClick= {() => lista(7)} 
            >Testul 8</button>
                <button className='MainCatBtn'
            onClick= {() => lista(8)} 
            >Testul 9</button>
                <button className='MainCatBtn'
            onClick= {() => lista(9)} 
            >Testul 10</button>
                <button className='MainCatBtn'
            onClick= {() => lista(10)} 
            >Testul 11</button>
                <button className='MainCatBtn'
            onClick= {() => lista(11)} 
            >Testul 12</button>
                <button className='MainCatBtn'
            onClick= {() => lista(12)} 
            >Testul 13</button>
                <button className='MainCatBtn'
            onClick= {() => lista(13)} 
            >Testul 14</button>
                <button className='MainCatBtn'
            onClick= {() => lista(14)} 
            >Testul 15</button>
                <button className='MainCatBtn'
            onClick= {() => lista(15)} 
            >Testul 16</button>
                <button className='MainCatBtn'
            onClick= {() => lista(16)} 
            >Testul 17</button>
                <button className='MainCatBtn'
            onClick= {() => lista(17)} 
            >Testul 18</button>
                <button className='MainCatBtn'
            onClick= {() => lista(18)} 
            >Testul 19</button>
                <button className='MainCatBtn'
            onClick= {() => lista(19)} 
            >Testul 20</button></div>

            <Footer />
            </div>
    );
}

export default Teste;