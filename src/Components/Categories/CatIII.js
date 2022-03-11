import React, { useContext} from 'react';
import { QuizContext } from '../../Helpers/Context';
import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatIII = () => {
    const {setGameState} = useContext(QuizContext);    return (
        <div className="MenuContainer">

            <Nav/>
            <div className="Menu">
                <div className='MainCat'>
                <button onClick={()=>setGameState("catiii1")} className='MainCatBtn'>
                <b>1.</b> Apărarea drepturilor omului și a libertăților fundamentale
                </button>
                <button onClick={()=>setGameState("catiii2")} className='MainCatBtn'><b>2.</b> Drepturi ale cetățenilor și respectarea principiului egalitații între aceștia și formele de discriminare și sancționarea acestora</button>
                </div>
                <button onClick={()=>setGameState("menu")} className='back'>Înapoi</button>
        </div>
        <Footer />
</div>
    );
};

export default CatIII;