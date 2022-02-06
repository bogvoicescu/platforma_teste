import React from 'react';
import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatIII = () => {
    return (
        <div className="MenuContainer">

            <Nav/>
            <div className="Menu">
                <div className='MainCat'>
                <button className='MainCatBtn'>
                <b>1.</b><li>Apărarea drepturilor omului și a libertăților fundamentale</li>
                <li>Drepturi ale cetățenilor și respectarea principiului egalității între aceștia</li>
                <li>Forme de discriminare și sancționarea acestora</li>
                </button>
                <button className='MainCatBtn'><b>2.</b><li>Argumentarea și structura argumentării</li>
                <li>Termenii: caracteruzare generală, raporturi între termeni</li>
                <li>Propoziții categorice: tipuri de propoziții categorice, raporturi logice între propoziții categorice</li></button>
                <button className='MainCatBtn'> <b>3.</b><li>Raționamente: caracterizare generală, tipuri de raționament</li>
                <li>Utilizarea unor raționamente adecvate în luarea deciziilor</li>
                <li>Stabilirea unor corelații între întemeierea deciziilor, acțiune și consecințele acestora </li></button>
                </div>
        </div>
        <Footer />
</div>
    );
};

export default CatIII;