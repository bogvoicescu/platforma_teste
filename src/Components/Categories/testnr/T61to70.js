import React, { useContext } from "react";
import {QuizContext} from "../../../Helpers/Context";
import "../../../App.css";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import "../MainCat.css";


function T61to70() {
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
            onClick= {() => lista(60)} 
            >Testul 61</button>
                <button className='MainCatBtn'
            onClick= {() => lista(61)} 
            >Testul 62</button>
                <button className='MainCatBtn'
            onClick= {() => lista(62)} 
            >Testul 63</button>
                <button className='MainCatBtn'
            onClick= {() => lista(63)} 
            >Testul 64</button>
                <button className='MainCatBtn'
            onClick= {() => lista(64)} 
            >Testul 65</button>
                <button className='MainCatBtn'
            onClick= {() => lista(65)} 
            >Testul 66</button>
                <button className='MainCatBtn'
            onClick= {() => lista(66)} 
            >Testul 67</button>
                <button className='MainCatBtn'
            onClick= {() => lista(67)} 
            >Testul 68</button>
            <button className='MainCatBtn'
            onClick= {() => lista(68)} 
            >Testul 69</button>
            <button className='MainCatBtn'
            onClick= {() => lista(69)} 
            >Testul 70</button>
            </div>
            <button onClick={()=>setGameState("testlist")} className='back'>Înapoi</button>
            </div>
            <Footer />
            </div>
    );
}

export default T61to70;