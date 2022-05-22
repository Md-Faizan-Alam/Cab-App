import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AvailableCabs from './AvailableCabs'
import CabBooking from './CabBooking'
import ConfirmBooking from './ConfirmBooking'

const BookingStage = (props) => {

    const bookingStage = {
        booking: CabBooking,
        available: AvailableCabs,
        confirm: ConfirmBooking
    }
    const Stage = bookingStage[props.stage];

  return (
    <>
    <Stage/>
    </>
  )
}

export default BookingStage