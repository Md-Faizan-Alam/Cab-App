import React from 'react';

const Navbar = (props) => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-black bg-gradient border-bottom border-warning border-5 py-2"
        >
            <div className="container-fluid">
                <img src="Picture3.png" width="40" height="40"/>
                <a className="navbar-brand fs-1 ms-3" href="#">Wheelin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle fs-4"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Login
                            </a>
                            <ul
                                className="dropdown-menu bg-warning"
                                aria-labelledby="navbarDropdown"
                            >
                                <li><a className="dropdown-item" href="#">as Admin</a></li>
                                <li><a className="dropdown-item" href="#">as Customer</a></li>
                                <li><a className="dropdown-item" href="#">as Driver</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle fs-4"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Register
                            </a>
                            <ul
                                className="dropdown-menu bg-warning"
                                aria-labelledby="navbarDropdown"
                            >
                                <li><a className="dropdown-item" href="#">as Customer</a></li>
                                <li><a className="dropdown-item" href="#">as Driver</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;