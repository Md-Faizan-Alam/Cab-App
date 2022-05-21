import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignSet =(props)=>{
    const navigate = useNavigate();

    function loginBlock(){
        navigate('login');
    }
    function phoneBlock(e){
        if(e.target.id=='customerRegister'){
            navigate('phoneCustomer')
        }
        else{
        navigate('phoneDriver');
        }
    }
    return(
        <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
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
                                <li><a className="dropdown-item" onClick={loginBlock}>as Admin</a></li>
                                <li><a className="dropdown-item" onClick={loginBlock}>as Customer</a></li>
                                <li><a className="dropdown-item" onClick={loginBlock}>as Driver</a></li>
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
                                <li><a className="dropdown-item" onClick={phoneBlock} id='customerRegister'>as Customer</a></li>
                                <li><a className="dropdown-item" onClick={phoneBlock} id='driverRegister'>as Driver</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
        </>
    );
}

export default SignSet;