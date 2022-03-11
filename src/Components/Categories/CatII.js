import React, { useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatII = () => {
    const {setGameState} = useContext(QuizContext);
    return (
        <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
            <div className='MainCat'>
            <button onClick={()=>setGameState("catii1")} className='MainCatBtn'><b>1.</b> Parlamentul României</button>
            <button onClick={()=>setGameState("catii2")} className='MainCatBtn'><b>2.</b> Președintele României</button>
            <button onClick={()=>setGameState("catii2")} className='MainCatBtn'><b>3.</b> Guvernul României</button>
            <button onClick={()=>setGameState("catii2")} className='MainCatBtn'><b>4.</b> Administrația Publică</button>
            <button onClick={()=>setGameState("catii2")} className='MainCatBtn'><b>5.</b> Autoritatea Judecătorească</button>
            </div>
            <button onClick={()=>setGameState("menu")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatII;