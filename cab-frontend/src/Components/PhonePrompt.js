import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {changePhone} from '../Actions/PhoneAction';

const PhonePrompt = (props) => {
  const [phone, setPhone] = useState('');
  const [popUp, setPopUp] = useState('');
  const type = useSelector(state => state.userType);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getTitle() {
    if (type === 'driver') {
      return 'Drive to fulfil your dreams';
    }
    return 'A car for every occasion';
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function registerBlock() {
    if (phone.length === 10 && !isNaN(phone)) {
      dispatch(changePhone(phone));
      if (type === "customer") {
        navigate('registerCustomer')
      }
      else {
        navigate('registerDriver');
      }
    }
    else {
      setPopUp('Enter a valid number');
      setPhone('');
    }
  }
  return (
    <>
      <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{ top: '10vw', fontSize: '3vw', opacity: '0.9', borderRadius: '3vw', paddingTop: '2vw', height: '30vw' }}>
        <div className="fw-bold text-decoration-underline text-warning">{getTitle()}</div>
        <form>
          <table className="table text-light table-borderless" style={{ marginTop: '2vw' }}>
            <tbody>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw', position: 'relative', right: '12vw' }} className="text-danger fw-bold" >{popUp}</td>
              </tr>
              <tr>
                <td >Phone: </td>
                <td ><input type="text" value={phone} onChange={handlePhone} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your phone number" /></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning" onClick={registerBlock} style={{ fontSize: '2vw', padding: '0vw 1vw' }}>Next</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default PhonePrompt;