import React, { useState } from 'react';
import SignBox from '../Components/SignBox';

const Navbar = (props) => {

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-black bg-gradient border-bottom border-warning border-5 py-0"
        >
            <div className="container-fluid">
                <div>
                    <img id='logo' src="Picture3.png"/>
                    <a className="navbar-brand fs-1" href="#">Wheelin</a>
                </div>
                <SignBox />
            </div>
        </nav>
    );
}

export default Navbar;