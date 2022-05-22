import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../Actions/TypeAction';

const LoginButton = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const type = useSelector(state=>state.userType);


    // Reloading Admin Login bringing back the links
    function loginBlock(passedType) {
        console.log('loginBlock has been called for ' + passedType);
        dispatch(setType(passedType));
        document.getElementById('collapseToggle').click();
        navigate('login');
    }

    function phoneBlock(passedType) {
        console.log('phoneBlock has been called for ' + passedType);
        dispatch(setType(passedType));
        document.getElementById('collapseToggle').click();
        navigate('login/phone');
    }
    return (
        <>
            <button className="navbar-toggler" type="button" id='collapseToggle' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle fs-4"
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
                            <li><a className="dropdown-item" onClick={() => { loginBlock('admin') }} >as Admin</a></li>
                            <li><a className="dropdown-item" onClick={() => { loginBlock('customer') }} >as Customer</a></li>
                            <li><a className="dropdown-item" onClick={() => { loginBlock('driver') }} >as Driver</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle fs-4"
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
                            <li><a className="dropdown-item" onClick={()=>{phoneBlock('customer')}} id='customerRegister'>as Customer</a></li>
                            <li><a className="dropdown-item" onClick={()=>{phoneBlock('driver')}} id='driverRegister'>as Driver</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </>
    );
}

export default LoginButton;