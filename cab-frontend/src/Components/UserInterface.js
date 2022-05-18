import React from 'react';
import DeleteAccount from './DeleteAccount';
import Feedback from './Feedback';
import Profile from './Profile';
import SideBar from './SideBar';
import Trips from './Trips';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const UserInterface =(props)=>{
    return(
        <>

        <div className="conatiner bg-dark m-auto text-center text-light position-relative" style={{width: '90vw',top: '3vw', fontSize: '3vw', opacity:'0.9',bordeRadius: '20px',height: '90vw'}}>
        <nav className="navbar navbar-light bg-warning p-0" >
          <div className="container-fluid py-2">
            <span className="navbar-brand mb-0 h1 fw-bold ms-2" style={{fontSize: '4vw'}}>Welcome Jake</span>
          </div>
        </nav>
        <div className="container">
        <BrowserRouter>
         <SideBar />
          <div className="bg-warning position-absolute p-0 end-0" style={{width: '70vw',height: '70%',borderBottomLeftRadius: '20px'}}>
            <div className="bg-black bg-gradient m-auto position-relative" style={{top: '2vw',height: '90%',width: '90%', borderRadius: '10px'}}>
              <Routes>
                <Route path='/profile' element={<Profile/>} />
                <Route path='/trips' element={<Trips/>} />
                <Route path='/feedback' element={<Feedback/>} />
                <Route path='/delete' element={<DeleteAccount/>} />
              </Routes>
                {/* <Profile /> */}
                {/* <Trips /> */}
                {/* <Feedback /> */}
                {/* <DeleteAccount /> */}
              
            </div>
          </div>
          </BrowserRouter>
        </div>
      </div>
        </>
    );
}

export default UserInterface;