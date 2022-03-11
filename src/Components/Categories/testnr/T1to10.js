import React, { useContext } from "react";
import {QuizContext} from "../../../Helpers/Context";
import "../../../App.css";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import "../MainCat.css";


function T1to10() {
    const {setGameState, setTest} = useContext(QuizContext);
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
            </div>
            <button onClick={()=>setGameState("testlist")} className='back'>Înapoi</button>
            </div>
            <Footer />
            </div>
    );
}

export default T1to10;