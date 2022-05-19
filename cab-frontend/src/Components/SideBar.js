import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = (props)=>{
  const [check, setCheck] = useState({profile:true, trips:false, booking:false, delete:false});
  const navigate = useNavigate();

  useEffect(()=>{
    // document.getElementById('btnradio1').click();
  },[]);

  const sideBarToggle = (e) => {
    console.log(e.target.value+' toggled');
    setCheck(() => {
      return {
        profile: false,
        trips: false,
        booking: false,
        delete: false,
        [e.target.value]: true
      };
    });
    navigate(e.target.value+'*');
  };

    return(
        <>
         <div className="btn-group-vertical position-absolute start-0" style={{marginTop: '5vw'}} role="group" aria-label="Basic radio toggle button group">
         <input onChange={sideBarToggle} checked={check.profile} value={'profile'} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio1">Profile</label>
          
            <input onChange={sideBarToggle} checked={check.trips} value={'trips'} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio2" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio2">Trips</label>
          
            {/*<input onChange={sideBarToggle} checked={check.booking} value={'booking'} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio3" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio3">Feedback</label> */}

          <input onChange={sideBarToggle} checked={check.booking} value={'booking'} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio3" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio3">Cab Booking</label>
          
            <input onChange={sideBarToggle} checked={check.delete} value={'delete'} type="radio" className="btn-check sideBar" name="btnradio" id="btnradio4" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio4">Delete Account</label>
            
          </div>
        </>
    );
}

export default SideBar;