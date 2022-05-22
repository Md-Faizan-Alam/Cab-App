import React from 'react';
import DriverRegistration from './DriverRegistration';
import LoginForm from './LoginForm';
import PhonePrompt from './PhonePrompt';
import RegistrationForm from './RegistrationForm';

const VariableForm = (props)=>{
    const form = {
        login: LoginForm,
        customer: RegistrationForm,
        driver: DriverRegistration,
        phone: PhonePrompt
    }
    const Form = form[props.type];
    return(
        <>
        <Form />
        </>
    );
}

export default VariableForm;