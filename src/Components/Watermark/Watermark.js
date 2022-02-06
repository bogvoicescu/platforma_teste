import React from 'react';
import watermark from "../logo.png";
import "./Watermark.css";
import { ReactDOM } from 'react';

const logo = "https://devinopolitist-grile.ro/wp-content/uploads/2022/02/cropped-devinopolitist-logo-small-full.png";

function Watermark() {
    return (
            <div className='logoWM'>
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />
            <img className='logo' alt='logo' src={logo} />           
            </div>
    );
}

export default Watermark;