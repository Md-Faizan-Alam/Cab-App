import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CabBooking from './CabBooking';
import Profile from './Profile';
import Feedback from './Feedback';
import GiveFeedback from './GiveFeedback';
import Trips from './Trips';
import UserInterface from './UserInterface';
import VariableForm from './VariableForm';
import DeleteAccount from './DeleteAccount';
import AvailableCabs from './AvailableCabs';
import BookingStage from './BookingStage';
import { useSelector } from 'react-redux';

const FrontComponent = (props) => {
    const stage = useSelector(state=>state.stage);
    
    return (
        <>
            <div style={{ height: '80vw', backgroundImage: `url("./TAXI.jpg")`, backgroundSize: 'cover' }}>
                <Routes>
                    <Route path='/login' element={<VariableForm type='login' />} />
                    <Route path='/login/phone' element={<VariableForm type='phone' /> }/>
                    <Route path='/login/phone/registerCustomer' element={<VariableForm type='registration' /> }/>
                    <Route path='/login/phone/registerDriver' element={<VariableForm type='registration' /> }/>
                    {/* <Route path='/phoneDriver/register' element={<VariableForm type='registration' heading='Drive to fulfil your dreams' userType="driver" />} />
                    <Route path='/phoneCustomer/register' element={<VariableForm type='registration' heading='A car for every occasion' userType="customer" />} /> */}
                    <Route path='/login/interface' element={<UserInterface />} >
                        <Route index element={<Profile />} />
                        <Route path='/login/interface/trips' element={<Trips />} />
                        <Route path='/login/interface/feedback' element={<Feedback/>} />
                        <Route path='/login/interface/giveFeedback' element={<GiveFeedback/>} />
                        <Route path='/login/interface/booking' element={<BookingStage stage={stage} />} />
                        <Route path='/login/interface/delete' element={<DeleteAccount />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default FrontComponent;