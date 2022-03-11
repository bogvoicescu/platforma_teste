import React from 'react';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Nav/Footer';
import ApiUser from './ApiUser';


const Api = () => {
    return (
        <div className="MenuContainer">
        <Nav/>
        <div className="Menu">
        <ApiUser/>
            
    </div>
    <Footer />
</div>
    );
};

export default Api;