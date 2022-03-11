import React, { useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatIII2 = () => {
    const {setGameState} = useContext(QuizContext);    return (
        <div className="MenuContainer">

            <Nav/>
            <div className="Menu">
            <div className='MainCat'>
                <button onClick={()=>setGameState("catiii2p1")} className='MainCatBtn'>
                <b>1.</b> Constituția României 
                </button>
                <button onClick={()=>setGameState("catiii2p2")} className='MainCatBtn'><b>2.</b> OG 137/200 privind prevenirea și sancționarea tuturor formelor de discriminare</button>
                </div>
                <button onClick={()=>setGameState("catiii")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatIII2;