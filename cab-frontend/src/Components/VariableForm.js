import React from 'react';
import LoginForm from './LoginForm';
import PhonePrompt from './PhonePrompt';
import RegistrationForm from './RegistrationFrom';

const VariableForm = (props)=>{
    const form = {
        login: LoginForm,
        registration: RegistrationForm,
        phone: PhonePrompt
    }
    const Form = form[props.type];
    return(
        <>
        <Form heading= {props.heading} userType={props.userType}/>
        </>
    );
}

export default VariableForm;