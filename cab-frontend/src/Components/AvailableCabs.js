import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStage } from '../Actions/StageAction';

const AvailableCabs = (props) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(setStage('booking'));
  }
  function handleNext() {
    dispatch(setStage('confirm'));
  }
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
              <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" autoComplete="off" />
              <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{ right: '12vw' }}>DriverName</span><span>Rating</span><span className='position-relative' style={{ left: '12vw' }}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" autoComplete="off" />
              <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{ right: '12vw' }}>DriverName</span><span>Rating</span><span className='position-relative' style={{ left: '12vw' }}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" autoComplete="off" />
              <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{ right: '12vw' }}>DriverName</span><span>Rating</span><span className='position-relative' style={{ left: '12vw' }}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" autoComplete="off" />
              <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{ right: '12vw' }}>DriverName</span><span>Rating</span><span className='position-relative' style={{ left: '12vw' }}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <input /*onChange={sideBarToggle} checked={check.profile}*/ value='profile' type="radio" className="btn-check sideBar" name="btnradio" autoComplete="off" />
              <label className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }} htmlFor="btnradio1"><span className='position-relative' style={{ right: '12vw' }}>DriverName</span><span>Rating</span><span className='position-relative' style={{ left: '12vw' }}>Rate/Km</span></label>
            </td>
          </tr>
          <tr>
            <td><svg xmlns="http://www.w3.org/2000/svg" onClick={handleBack} width="80" height="80" role="button" fill="#ffc107" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg></td>
            <td></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" onClick={handleNext} role="button" fill="#ffc107" width="80" height="80" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg></td>
          </tr>

        </tbody>
      </table>
    </>
  );
}

export default AvailableCabs;