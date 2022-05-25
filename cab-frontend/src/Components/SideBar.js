import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const SideBar = (props)=>{
  const [check, setCheck] = useState({profile:true, trips:false, feedback:false, giveFeedback:false, booking:false, delete:false});
  const navigate = useNavigate();
  const type = useSelector(state=>state.userType);

  const sideBarToggle = (e) => {
    console.log(e.target.value+' toggled');
    setCheck(() => {
      return {
        profile: false,
        trips: false,
        feedback:false,
        giveFeedback:false,
        booking: false,
        delete: false,
        [e.target.value]: true
      };
    });
    if(e.target.value==="profile"){
      navigate('');
    }
    else{
      navigate(e.target.value);
    }
  };

  function getToggleDisplay(value){
    if(value==='feedback' && type!=='driver'){
      return 'none';
    }
    if(value==='giveFeedback' && type==='admin'){
      return 'none';
    }
    if(value==='booking' && type!=='customer'){
      return 'none';
    }
    if(value==='delete' && type==='admin'){
      return 'none';
    }
    return '';
  }

    return(
        <>
         <div className="btn-group-vertical position-absolute start-0" style={{marginTop: '5vw'}} role="group" aria-label="Basic radio toggle button group">
         <input onChange={sideBarToggle} checked={check.profile} value='profile' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw'}} htmlFor="btnradio1">Profile</label>
          
            <input onChange={sideBarToggle} checked={check.trips} value='trips' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio2" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('trips') }} htmlFor="btnradio2">Trips</label>
          
            {/* <input onChange={sideBarToggle} checked={check.feedback} value='feedback' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio3" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('feedback') }} htmlFor="btnradio3">Feedback</label> */}

          <input onChange={sideBarToggle} checked={check.giveFeedback} value='giveFeedback' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio4" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('giveFeedback') }} htmlFor="btnradio4">Give us Feedback</label>

          <input onChange={sideBarToggle} checked={check.booking} value='booking' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio5" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('booking') }} htmlFor="btnradio5">Book a Cab</label>
          
            <input onChange={sideBarToggle} checked={check.delete} value='delete' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio6" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('delete') }} htmlFor="btnradio6">Delete Account</label>
            
          </div>
        </>
    );
}

export default SideBar;