import React from 'react';
import SideBar from './SideBar';
import InterfaceBody from './InterfaceBody';

const UserInterface =(props)=>{
    return(
        <>
        <div className="conatiner bg-dark m-auto text-center text-light position-relative" style={{width: '90vw',top: '3vw', fontSize: '3vw', opacity:'0.9',bordeRadius: '20px',height: '90vw'}}>
        <nav className="navbar navbar-light bg-warning p-0" >
          <div className="container-fluid py-2">
            <span className="navbar-brand mb-0 h1 fw-bold ms-2" style={{fontSize: '4vw',padding: '1vw'}}>Welcome Jake</span>
          </div>
        </nav>
        <div className="container">
         <SideBar />
         <InterfaceBody />
        </div>
      </div>
      </>
    );
}

export default UserInterface;