import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';

const SignBox = () => {
    const user = useSelector(state => state.user);
    useEffect(() => {
        console.log('SignBox is rerendered');
    }, [user]);
    const logBox = {
        login: LoginButton,
        logout: LogoutButton
    }
    const LogBox = logBox[user===''? 'login' : 'logout'];
    return (
        <>
            <LogBox />
        </>
    )
}

export default SignBox