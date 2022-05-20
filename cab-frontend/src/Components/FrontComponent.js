import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CabBooking from './CabBooking';
import Profile from './Profile';
import Feedback from './Feedback';
import Trips from './Trips';
import UserInterface from './UserInterface';
import VariableForm from './VariableForm';
import DeleteAccount from './DeleteAccount';

const FrontComponent = (props) => {
    return (
        <>
            <div style={{ height: '80vw', backgroundImage: `url("./TAXI.jpg")`, backgroundSize: 'cover' }}>
                <Routes>
                    <Route path='/login' element={<VariableForm type='login' />} />
                    <Route path='/phone/register' element={<VariableForm type='registration' />} />
                    <Route path='/phone' element={<VariableForm type='phone' />} />
                    <Route path='/login/interface' element={<UserInterface />} >
                        <Route index element={<Profile />} />
                        <Route path='/login/interface/trips' element={<Trips />} />
                        <Route path='/login/interface/feedback' element={<Feedback/>} />
                        <Route path='/login/interface/booking' element={<CabBooking />} />
                        <Route path='/login/interface/delete' element={<DeleteAccount />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default FrontComponent;