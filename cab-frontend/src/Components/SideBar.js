import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = (props)=>{
  const [check, setCheck] = useState({check1:true, check2:false, check3:false, check4:false});

  useEffect(() => {
    document.getElementById("btnradio1").click();
  },[]);

      // e.preventDefault();
      const handleChange = (e) => {
        setCheck(() => {
          return {
            check1: false,
            check2: false,
            check3: false,
            check4: false,
            [e.target.value]: true
          };
        });
      };
      // the buttons are not working properly (radio button behaviour)
    return(
        <>
         <div className="btn-group-vertical position-absolute start-0" style={{marginTop: '5vw'}} role="group" aria-label="Basic radio toggle button group">
         <Link to='/profile'><input onChange={handleChange} checked={check.check1} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio1">Profile</label>
          
            <Link to='/trips'><input onChange={handleChange} checked={check.check2} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio2" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio2">Trips</label>
          
            {/* <Link to='/feedback'><input onChange={handleChange} checked={check.check3} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio3" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio3">Feedback</label> */}

          <Link to='/booking'><input onChange={handleChange} checked={check.check3} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio3" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio3">Cab Booking</label>
          
            <Link to='/delete'><input onChange={handleChange} checked={check.check4} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio4" autoComplete="off"/></Link>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio4">Delete Account</label>
            
          </div>
        </>
    );
}

export default SideBar;