import React, { useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatIII1 = () => {
    const {setGameState} = useContext(QuizContext);    return (
        <div className="MenuContainer">
            <Nav/>
            <div className="Menu">
            <div className='MainCat'>
                <button onClick={()=>setGameState("catiii1p1")} className='MainCatBtn'>
                <b>1.</b> Declarația Universală a Drepturilor Omului din 10 decembrie 1948
                </button>
                <button onClick={()=>setGameState("catiii1p2")} className='MainCatBtn'><b>2.</b> Convenția din 4 noiembrie 1950 pentru apărarea drepturilor omului și a libertăților fundamentale</button>
                </div>
               <button onClick={()=>setGameState("catiii")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatIII1;