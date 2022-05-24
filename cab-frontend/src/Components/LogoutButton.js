import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../Actions/TypeAction';
import { setUser } from '../Actions/UserAction';

const LogoutButton = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout(){
        dispatch(setUser(null));
        navigate('login');
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
                            className="nav-link fs-4"
                            role="button"
                            id='logoutButton'
                            onClick={handleLogout}
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default LogoutButton;