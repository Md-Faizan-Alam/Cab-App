import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = (props)=>{

    function handleChange(e){
      e.preventDefault();
    }
    return(
        <>
         <div className="btn-group-vertical position-absolute start-0" style={{marginTop: '5vw'}} role="group" aria-label="Basic radio toggle button group">
         <Link to='/profile'><input onChange={handleChange} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio1">Profile</label>
          
            <Link to='/trips'><input onChange={handleChange} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio2" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio2">Trips</label>
          
            <Link to='/feedback'><input onChange={handleChange} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio3" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio3">Feedback</label>
          
            <Link to='/delete'><input onChange={handleChange} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio4" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio4">Delete Account</label>
            
          </div>
        </>
    );
}

export default SideBar;