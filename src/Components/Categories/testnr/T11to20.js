import React, { useContext } from "react";
import {QuizContext} from "../../../Helpers/Context";
import "../../../App.css";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import "../MainCat.css";


function T11to20() {
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
            >Testul 20</button>
            </div>
            <button onClick={()=>setGameState("testlist")} className='back'>Înapoi</button>
            </div>
            <Footer />
            </div>
    );
}

export default T11to20;