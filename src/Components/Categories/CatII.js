import React from 'react';
import "./MainCat.css";
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const CatII = () => {
    return (
        <div className="MenuContainer">

        <Nav/>
        <div className="Menu">
            <div className='MainCat'>
            <button className='MainCatBtn'><b>1.</b> Constituția României</button>
            <button className='MainCatBtn'><b>2.</b> Legea nr.80/1995 privind statutul cadrelor militare...</button>
            <button className='MainCatBtn'><b>3.</b> Legea nr.360/2002 privind Statutul Polițistului...</button>
            <button className='MainCatBtn'><b>4.</b> Legea nr.218/2002 *R privind organizarea și funcționarea Poliției Române... </button>
            <button className='MainCatBtn'><b>5.</b> Legea nr.550/2004 privind organizarea și funcționarea Jandarmeriei Române...</button>
            <button className='MainCatBtn'><b>6.</b> O.U.G. nr.104/2001 privind organizarea și funcționarea Poliției de Frontieră Române...</button>
            <button className='MainCatBtn'><b>7.</b> O.U.G. nr.30/2007 privind organizarea și funcționarea M.A.I. ...</button>
            <button className='MainCatBtn'><b>8.</b> H.G. nr.991/2005 pentru aprobarea Codului de etică și deontologie al polițistului</button>
            <button className='MainCatBtn'><b>9.</b> Jandarmeria Română</button>
            </div>
        </div>
        <Footer />
</div>
    );
};

export default CatII;