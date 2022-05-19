import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CabBooking from './CabBooking';
import DeleteAccount from './DeleteAccount';
import Profile from './Profile';
import Trips from './Trips';

const InterfaceBody = (props)=>{
    return(
        <>
        <div className="bg-warning position-absolute p-0 end-0" style={{width: '70vw',height: '85%',borderBottomLeftRadius: '20px'}}>
            <div className="bg-black bg-gradient m-auto position-relative" style={{top: '2vw',height: '90%',width: '90%', borderRadius: '10px'}}>
              <Routes>
                <Route path='/interface/profile' element={<Profile/>} />
                <Route path='/interface/trips' element={<Trips/>} />
                {/* <Route path='/interface/feedback' element={<Feedback/>} /> */}
                <Route path='/interface/booking' element={<CabBooking/>} />
                <Route path='/interface/delete' element={<DeleteAccount/>} />
              </Routes>
            </div>
          </div>
        </>
    );
}

export default InterfaceBody;