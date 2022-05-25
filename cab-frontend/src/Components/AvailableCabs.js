import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../Actions/OptionAction';
import { setStage } from '../Actions/StageAction';
import { setRide, postTrip } from '../Actions/TripAction';

const AvailableCabs = (props) => {
  const currentTrip = useSelector(state => state.trip);
  // for(let key in currentTrip){
  //   console.log(`${key} and`)
  // }
  console.log(typeof(currentTrip));
  console.log('Current Trip Before ' + currentTrip);
  const dispatch = useDispatch();
  let checkedOption;

  useEffect(() => {
    dispatch(setOption());
  }, []);

  let optionList = useSelector(state => state.options);
  let checkArr = []
  for (let i = 0; i < optionList.length; i++) {
    checkArr.push(false);
  }
  const [checked, setChecked] = useState(checkArr);

  function handleClick(e) {
    console.log('Clicked the input ' + e.target.id);
    let tempArr = checkArr;
    tempArr[e.target.id] = true;
    setChecked(tempArr);
    console.log(checked);
  }

  function trueOption() {
    for (let i in checked) {
      if (checked[i]) {
        return i;
      }
    }
    return null;
  }

  // console.log('Current Trip is \n ' + currentTrip);
  for(const key in currentTrip){
    console.log(key+' : '+currentTrip[key]);
  }

  const options = optionList ? optionList.map((val) =>
    <tr key={val.id}>
      <td colSpan={4}>
        <input type="radio" name="selectedDriver" id={val.id} checked={checked[val.id]} onChange={handleClick} className="btn-check" autoComplete="off" />
        <label htmlFor={val.id} className="btn btn-outline-warning" style={{ width: '60vw', fontSize: '2vw', padding: '1vw' }}>
          <span className='position-relative' style={{ right: '20vw' }}>{val.name}</span>
          <span className='position-relative' style={{ right: '10vw' }}>{val.carType}</span>
          <span className='position-relative' style={{ left: '3vw' }}>{val.ratePerKm}</span>
          <span className='position-relative' style={{ left: '15vw' }}>{val.rating}</span>
        </label>
      </td>
    </tr>) : <tr><td>Not Found</td></tr>;

  console.log('This is ' + optionList);


 function handleNext() {
    console.log('Entered Handle Next');
    console.log('First Point');
    const carMap = {
      SUV: 300,
      Swift: 200,
      Sedan: 150,
      Toyota: 400,
      Dzire: 250
    }
    console.log('Second Point');
    checkedOption = trueOption();
    console.log(checkedOption);
    console.log('Third Point');
    if (!(checkedOption === null)) {
      console.log('Fourth Point');
      let changedTrip = currentTrip;
      console.log(optionList[checkedOption]['driverId']);
      changedTrip['driver_id'] = optionList[checkedOption]['driverId'];
      console.log('Sixth Point');
      changedTrip['fare'] = changedTrip['distance'] * carMap[optionList[checkedOption]['carType']];
      console.log('Seventh Point');
      console.log(changedTrip);
      dispatch(postTrip(changedTrip));
      dispatch(setStage('confirm'));
      console.log('Eighth Point');
    }
  }

  function handleBack() {
    dispatch(setStage('booking'));
  }

  return (
    <>
      <table className="table text-light table-borderless" style={{ fontSize: '2vw' }}>
        <thead>
          <tr>
            <th colSpan={5} style={{ fontSize: '3vw' }} >Available Cabs</th>
          </tr>
        </thead>
        <tbody>

          {options}

          <tr>
            <td colSpan={2}><svg xmlns="http://www.w3.org/2000/svg" onClick={handleBack} width="80" height="80" fill="#ffc107" style={{ width: '5vw', height: '5vw', position: 'relative' }} className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg></td>
            <td colSpan={2}><svg xmlns="http://www.w3.org/2000/svg" onClick={handleNext} role="button" fill="#ffc107" width="80" height="80" style={{ width: '5vw', height: '5vw' }} className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg></td>
          </tr>

        </tbody>
      </table>
    </>
  );
}

export default AvailableCabs;