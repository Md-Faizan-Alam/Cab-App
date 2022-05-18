import React from 'react';

const SideBar = (props)=>{
    return(
        <>
         <div className="btn-group-vertical position-absolute start-0" style={{marginTop: '5vw'}} role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} for="btnradio1">Profile</label>
          
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} for="btnradio2">Trips</label>
          
            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} for="btnradio3">Feedback</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
            <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw'}} for="btnradio3">Delete Account</label>
          </div>
        </>
    );
}

export default SideBar;