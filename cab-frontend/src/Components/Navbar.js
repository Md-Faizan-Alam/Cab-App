import React, { useState } from 'react';
import SignBox from './SignBox';

const Navbar = (props) => {
    const [visible, setVisible] = useState(true);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-black bg-gradient border-bottom border-warning border-5 py-2"
        >
            <div className="container-fluid">
                <div>
                    <img id='logo' src="Picture3.png" width="40" height="40" />
                    <a className="navbar-brand ms-3 fs-1" href="#">Wheelin</a>
                </div>
                {visible ? <SignBox /> : null}
            </div>
        </nav>
    );
}

export default Navbar;