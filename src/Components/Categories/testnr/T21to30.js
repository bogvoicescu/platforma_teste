import React, { useContext } from "react";
import {QuizContext} from "../../../Helpers/Context";
import "../../../App.css";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import "../MainCat.css";


function T21to30() {
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
            onClick= {() => lista(20)} 
            >Testul 21</button>
                <button className='MainCatBtn'
            onClick= {() => lista(21)} 
            >Testul 22</button>
                <button className='MainCatBtn'
            onClick= {() => lista(22)} 
            >Testul 23</button>
                <button className='MainCatBtn'
            onClick= {() => lista(23)} 
            >Testul 24</button>
                <button className='MainCatBtn'
            onClick= {() => lista(24)} 
            >Testul 25</button>
                <button className='MainCatBtn'
            onClick= {() => lista(25)} 
            >Testul 26</button>
                <button className='MainCatBtn'
            onClick= {() => lista(26)} 
            >Testul 27</button>
                <button className='MainCatBtn'
            onClick= {() => lista(27)} 
            >Testul 28</button>
                <button className='MainCatBtn'
            onClick= {() => lista(28)} 
            >Testul 29</button>
                <button className='MainCatBtn'
            onClick= {() => lista(29)} 
            >Testul 30</button>
            </div>
            <button onClick={()=>setGameState("testlist")} className='back'>Înapoi</button>
            </div>
            <Footer />
            </div>
    );
}

export default T21to30;