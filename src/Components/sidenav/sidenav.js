import React from 'react';
import './sidenav.css';

function Sidenav() {
    return(
        <div className="sidenav" id="sidenav">
        <ul>  
        <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
  </ul>

        </div>
    )
}

export default Sidenav;