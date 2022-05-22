import React from 'react';

const AvailableCabs = (props) => {
  return (
    <>
      <table className="table text-light table-borderless" style={{ fontSize: '2vw' }}>
        <thead>
          <tr>
            <th scope="col">Available Cabs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>
            <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off" />
            <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{right: '12vw'}}>DriverName</span><span>Rating</span><span className='position-relative' style={{left: '12vw'}}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
            <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off" />
            <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{right: '12vw'}}>DriverName</span><span>Rating</span><span className='position-relative' style={{left: '12vw'}}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
            <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off" />
            <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{right: '12vw'}}>DriverName</span><span>Rating</span><span className='position-relative' style={{left: '12vw'}}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
            <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off" />
            <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{right: '12vw'}}>DriverName</span><span>Rating</span><span className='position-relative' style={{left: '12vw'}}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
            <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off" />
            <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{right: '12vw'}}>DriverName</span><span>Rating</span><span className='position-relative' style={{left: '12vw'}}>Rate/Km</span></label>
            </td>
          </tr>
          
        </tbody>
      </table>
    </>
  );
}

export default AvailableCabs;