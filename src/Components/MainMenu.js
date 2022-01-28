import React, { useContext } from "react";
import {QuizContext} from "../Helpers/Context";
import "../App.css"
import { useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import TopNav from "../Components/sidenav/sidenav"

function MainMenu() {
    const {gameState, setGameState, test, setTest} = useContext(QuizContext);
    const lista = (nr) => {
        setTest(nr)
        setGameState("quiz");
    }
    return (
<div className="MenuContainer">

            <TopNav/>
            <div className="Menu">
            <h2>Meniu Teste</h2>
            <button 
            onClick= {() => lista(0)} 
            >Testul 1</button>
            <button 
            onClick= {() => lista(1)} 
            >Testul 2</button>
            <button 
            onClick= {() => lista(2)} 
            >Testul 3</button>
                        <button 
            onClick= {() => lista(3)} 
            >Testul 4</button>
                        <button 
            onClick= {() => lista(4)} 
            >Testul 5</button>
                        <button 
            onClick= {() => lista(5)} 
            >Testul 6</button>
                        <button 
            onClick= {() => lista(6)} 
            >Testul 7</button>
                        <button 
            onClick= {() => lista(7)} 
            >Testul 8</button>
                        <button 
            onClick= {() => lista(8)} 
            >Testul 9</button>
                        <button 
            onClick= {() => lista(9)} 
            >Testul 10</button>
                        <button 
            onClick= {() => lista(10)} 
            >Testul 11</button>
                        <button 
            onClick= {() => lista(11)} 
            >Testul 12</button>
                        <button 
            onClick= {() => lista(12)} 
            >Testul 13</button>
                        <button 
            onClick= {() => lista(13)} 
            >Testul 14</button>
                        <button 
            onClick= {() => lista(14)} 
            >Testul 15</button>
                        <button 
            onClick= {() => lista(15)} 
            >Testul 16</button>
                        <button 
            onClick= {() => lista(16)} 
            >Testul 17</button></div>
        </div>
    );
}

export default MainMenu;