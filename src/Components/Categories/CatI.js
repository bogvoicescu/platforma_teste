import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function CatI() {
    const {score, setScore, setGameState, test} = useContext(QuizContext);
    return (
    <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
            <div className='MainCat'>
                <button className='MainCatBtn'><b>1.</b> Ministerul Afacerilor Interne</button>
                <button className='MainCatBtn'><b>2.</b> Poliția Română</button>
                <button className='MainCatBtn'><b>3.</b> Poliția de Frontieră Română</button>
                <button className='MainCatBtn'><b>4.</b> Jandarmeria Română</button>
                <button className='MainCatBtn'><b>5.</b> Etica și deontologia personalului M.A.I.</button>
            </div>
        </div>
        <Footer />
</div>
    );
};

export default CatI;