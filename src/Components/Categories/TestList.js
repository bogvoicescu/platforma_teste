import React, {useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import "../../App.css"
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

function TestList() {
    const { setGameState} = useContext(QuizContext);
    return (
        <div className="MenuContainer">

            <Nav />
            <div className="Menu Test">
                <div className='MainCat'>
                    <button onClick={() => setGameState("t1to10")} className='MainCatBtn'>Testele 1 - 10</button>
                    <button onClick={() => setGameState("t11to20")} className='MainCatBtn'>Testele 11 - 20</button>
                    <button onClick={() => setGameState("t21to30")} className='MainCatBtn'>Testele 21 - 30</button>
                    <button onClick={() => setGameState("t31to40")} className='MainCatBtn'>Testele 31 - 40</button>
                    <button onClick={() => setGameState("t41to50")} className='MainCatBtn'>Testele 41 - 50</button>
                    <button onClick={() => setGameState("t51to60")} className='MainCatBtn'>Testele 51 - 60</button>
                    <button onClick={() => setGameState("t61to70")} className='MainCatBtn'>Testele 61 - 70</button>
                    {/* <button onClick={() => setGameState("api")} className='MainCatBtn'>Api Contul Meu</button> */}
                </div>
                <button className="nextBtn" onClick={(e) => {
            e.preventDefault();
            window.location.href='https://devinopolitist-grile.ro/grile-admitere-mai/';}}>Înapoi</button>
            </div>
            <Footer />
        </div>
    );
}
export default TestList;
