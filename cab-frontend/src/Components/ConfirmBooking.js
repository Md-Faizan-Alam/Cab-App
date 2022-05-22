import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStage } from '../Actions/StageAction';

const ConfirmBooking = (props) => {
  const dispatch = useDispatch();

  function handleRate(){
    dispatch(setStage('booking'));
  }

  return (
    <>
      <table className="table text-light table-borderless table-responsive-xl position-relative" style={{ top: '3vw' }}>
        <tbody>
          <tr>
            <td colSpan={2} className="text-start ps-3 text-warning">Your cab is on it's way</td>
          </tr>
          <tr>
            <td className="text-start ps-3">From: </td>
            <td className="text-start">From Location</td>
          </tr>
          <tr>
            <td className="text-start ps-3">To: </td>
            <td className="text-start">To Location</td>
          </tr>
          <tr>
            <td className="text-start ps-3">Driver Name: </td>
            <td className="text-start">Driver Name</td>
          </tr>
          <tr>
            <td className="text-start ps-3">Contact Number: </td>
            <td className="text-start">Contact Number</td>
          </tr>
          <tr>
            <td className="text-start ps-3">Car Type: </td>
            <td className="text-start">Car Type</td>
          </tr>
          <tr>
            <td className="text-start ps-3">Ride Type: </td>
            <td className="text-start">Ride Type</td>
          </tr>
          <tr>
            <td className="text-start ps-3">Total Amount: </td>
            <td className="text-start">Total Amount</td>
          </tr>

          {/* Rating button would be a set of star button that will share a state just like side bar but for select we will set them as true for all the stars that come before thae selected star */}
          <tr>
            <td colSpan={2}>
              <button
                type="button"
                className="btn btn-warning fw-bold position-relative"
                style={{ fontSize: '2vw', padding: '0.5vw 2vw', top: '2vw' }}
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