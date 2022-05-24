import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStage } from '../Actions/StageAction';

const ConfirmBooking = (props) => {
  const dFill = "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z";
  const dEmpty = "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z";
  const [fill, setFill] = useState([dEmpty, dEmpty, dEmpty, dEmpty, dEmpty]);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const trip = useSelector(state=>state.trip);
  console.log('the trip is '+trip);
  const [rating,setRating] = useState(1);
  // const [driver,setDriver] = useState([]);
  // let driver1;

  // useEffect(()=>{
  //   const getDriver = async ()=>{
  //     const response = await axios.get(`http://localhost:3333/userById/${trip.driver_id}`)
  //     .then(response=>response.data);
  //     setDriver(response);
  //     console.log(driver);
  //   }
  //   getDriver();
  //   console.log(driver);
  // },[]);
  
  // driver1 = driver ? driver.map(val=>val) : null;
  // console.log(driver1)
  
  function handleRate() {
    dispatch(setStage('booking'));
  }
  
  function handleSelect(e){
    setSelected(!selected);
    setRating(e.target.id);
  }
  
  function handleEnter(e) {
    console.log('Entered the star ' + e.target.id);
    if (!selected) {
      let fillArr = [];
      console.log(e.target.id);
      for (let i = 0; i < 5; i++) {
        if (i < e.target.id) {
          fillArr.push(dFill);
        }
        else {
          fillArr.push(dEmpty);
        }
      }
      console.log(fillArr);
      setFill(fillArr);
    }
    
    
  }
  
  function handleLeave(e) {
    console.log('Leaving the star ' + e.target.id);
    if(!selected){
      setFill([dEmpty, dEmpty, dEmpty, dEmpty, dEmpty]);
    }
  }

  // console.log('Trip is '+trip);
  // for(let key in trip){
  //   console.log(`${key} : ${trip[key]}`);
  // }
  return (
    <>
      <table className="table text-light table-borderless table-responsive-xl position-relative" style={{ top: '3vw' }}>
        <tbody>
          <tr>
            <td colSpan={2} className="text-start ps-3 text-warning">Your cab is on it's way</td>
          </tr>
          <tr>
            <td className="text-start ps-3">From: </td>
            <td className="text-start">{trip['from_location']}</td>
          </tr>
          <tr>
            <td className="text-start ps-3">To: </td>
            <td className="text-start">{trip['to_location']}</td>
          </tr>
          {/* <tr>
            <td className="text-start ps-3">Driver Name: </td>
            <td className="text-start">{driver1[0]['first_name']}</td>
          </tr>
          <tr>
            <td className="text-start ps-3">Contact Number: </td>
            <td className="text-start">{driver1[0]['phone']}</td>
          </tr> */}
          <tr>
            <td className="text-start ps-3">Ride Type: </td>
            <td className="text-start">{trip['ride']}</td>
          </tr>
          <tr>
            <td className="text-start ps-3">Total Amount: </td>
            <td className="text-start">{trip['fare']}</td>
          </tr>
          <tr>
            <td colSpan={2} className="ps-0">
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: '0vw 1vw', width: '3vw', height: '3vw' }} role={'radio'} width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleSelect} id='1' d={fill[0]} />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: '0vw 1vw', width: '3vw', height: '3vw' }} role={'radio'} width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleSelect} id='2' d={fill[1]} />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: '0vw 1vw', width: '3vw', height: '3vw' }} role={'radio'} width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleSelect} id='3' d={fill[2]} />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: '0vw 1vw', width: '3vw', height: '3vw' }} role={'radio'} width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleSelect} id='4' d={fill[3]} />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: '0vw 1vw', width: '3vw', height: '3vw' }} role={'radio'} width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleSelect} id='5' d={fill[4]} />
              </svg>
            </td>
          </tr>

          {/* Rating button would be a set of star button that will share a state just like side bar but for select we will set them as true for all the stars that come before thae selected star */}
          <tr>
            <td colSpan={2}>
              <button
                type="button"
                className="btn btn-warning fw-bold position-relative"
                style={{ fontSize: '2vw', padding: '0.5vw 2vw', top: '0vw' }}
                onClick={handleRate}
              >
                Rate
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ConfirmBooking;