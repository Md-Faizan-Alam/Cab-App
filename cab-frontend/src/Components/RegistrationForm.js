import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../Actions/UserAction';

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [popUp, setPopUp] = useState('');

  const phone = useSelector(state => state.phone);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleConfirm(e) {
    setConfirm(e.target.value);
  }
  // function handlePhone(e){
  //   setPhone(e.target.value);
  // }

  function handleRegister() {
    if (password === confirm) {
      const user = {
        type: 'customer',
        first_name: firstName,
        last_name: lastName,
        password: password,
        phone: phone,
        email: email,
        driver_license: null,
        address: address,
        driver_rating: null,
        cab_id: null
      }

      dispatch(saveUser(user));
      navigate('login');

    }
    else {
      setPopUp('The passwords do not match');
      setFirstName('');
      setLastName('');
      setEmail('');
      setAddress('');
      setPassword('');
      setConfirm('');
    }

  }

  return (
    <>
      <div className="conatiner bg-dark w-75 m-auto text-center text-light position-relative" style={{ top: '10vw', fontSize: '3vw', opacity: '0.9', borderRadius: '3vw', paddingTop: '2vw', height: '60vw' }}>
        <div className="fw-bold text-decoration-underline text-warning" style={{ padding: '1vw' }}>A car for every occasion</div>
        <form>
          <table className="table text-light table-borderless table-responsive-xl" style={{ marginTop: '2vw' }}>
            <tbody>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw', position: 'relative', right: '10vw' }} className="text-danger fw-bold" >{popUp}</td>
              </tr>
              <tr>
                <td className="text-end">First Name: </td>
                <td ><input type="text" value={firstName} onChange={handleFirstName} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your first name" /></td>
              </tr>
              <tr>
                <td className="text-end">Last Name: </td>
                <td ><input type="text" value={lastName} onChange={handleLastName} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your last name" /></td>
              </tr>
              <tr>
                <td className="text-end">Email: </td>
                <td ><input type="email" value={email} onChange={handleEmail} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your Email" /></td>
              </tr>
              <tr>
                <td className="text-end">Password: </td>
                <td ><input type="password" value={password} onChange={handlePassword} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter a password" /></td>
              </tr>
              <tr>
                <td className="text-end">Confirm Password: </td>
                <td ><input type="password" value={confirm} onChange={handleConfirm} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Confirm your password" /></td>
              </tr>
              <tr>
                <td className="text-end">Address: </td>
                <td ><input type="text" value={address} onChange={handleAddress} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your address" /></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" onClick={handleRegister} className="btn btn-warning" style={{ fontSize: '2vw', padding: '0vw 1vw' }}>Register</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;