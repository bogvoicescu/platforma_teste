import React, { useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatI() {
    const {setGameState} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
            <div className='MainCat'>
                <button onClick={()=>setGameState("cati1")} className='MainCatBtn'><b>1.</b> Ministerul Afacerilor Interne</button>
                <button onClick={()=>setGameState("cati2")} className='MainCatBtn'><b>2.</b> Poliția Română</button>
                <button onClick={()=>setGameState("cati3")}className='MainCatBtn'><b>3.</b> Poliția de Frontieră Română</button>
                <button onClick={()=>setGameState("cati4")}className='MainCatBtn'><b>4.</b> Jandarmeria Română</button>
                <button onClick={()=>setGameState("cati5")} className='MainCatBtn'><b>5.</b> Etica și deontologia personalului M.A.I.</button>
                <button onClick={()=>setGameState("cati6")} className='MainCatBtn'><b>6.</b> Statutul polițistului</button>
                <button onClick={()=>setGameState("cati7")}  className='MainCatBtn'><b>7.</b> Statutul cadrelor militare</button>
            </div>
            <button onClick={()=>setGameState("menu")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatI;