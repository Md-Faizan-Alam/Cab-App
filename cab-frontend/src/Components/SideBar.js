import React from 'react';

const SideBar = (props)=>{
    return(
        <>
         <div className="btn-group-vertical position-absolute start-0" style={{marginTop: '5vw'}} role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio1">Profile</label>
          
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio2">Trips</label>
          
            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio3">Feedback</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} htmlFor="btnradio3">Delete Account</label>
          </div>
        </>
    );
}

export default SideBar;