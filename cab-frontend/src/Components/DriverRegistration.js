import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../Actions/UserAction';

const DriverRegistration = () => {

  const carMap = {
    SUV: 300,
    Swift: 200,
    Sedan: 150,
    Toyota: 400,
    Dzire: 250
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [license, setLicense] = useState('');
  const [carType, setCarType] = useState('');
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
  function handleLicense(e) {
    setLicense(e.target.value);
  }
  function handleCarType(e) {
    setCarType(e.target.value);
    console.log(carType);
  }

  function handleRegister() {
    if (password === confirm && !(password ===null)) {
      const user = {
        type: 'driver',
        first_name: firstName,
        last_name: lastName,
        password: password,
        phone: phone,
        email: email,
        driver_license: license,
        address: address,
        driver_rating: 0,
        cab_id: 1
      }

      const cab = {
        type: carType,
        per_km_rate: carMap[carType],
        driver_id: null    // This has to be done on the backend 3 step
      }

      dispatch(saveUser(user, cab));
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
      setLicense('');
      setCarType('');
    }
  }


  return (
    <>
      <div className="conatiner bg-dark w-75 m-auto text-center text-light position-relative" style={{ top: '10vw', fontSize: '3vw', opacity: '0.9', borderRadius: '3vw', paddingTop: '2vw', height: '75vw' }}>
        <div className="fw-bold text-decoration-underline text-warning" style={{ padding: '1vw' }}>Drive to fulfil your dreams</div>
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
                <td className="text-end">License: </td>
                <td ><input type="text" value={license} onChange={handleLicense} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your license" /></td>
              </tr>

              <tr>
                <td className="text-end">Car Type: </td>
                <td><select value={carType} onChange={handleCarType} style={{ position: 'relative', right: '4.5vw', width: '75%', height: '4vw', fontSize: '2vw', padding: '0vw', borderRadius: '0.25rem' }}>
                  <option defaultValue={0}>Choose car type</option>
                  <option value="SUV">SUV</option>
                  <option value="Swift">Swift</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Dzire">Dzire</option>
                </select></td>
              </tr>


              <tr>
                <td colSpan="2"><button type="button" onClick={handleRegister} className="btn btn-warning" style={{ fontSize: '2vw', padding: '0vw 1vw' }}>Register</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default DriverRegistration