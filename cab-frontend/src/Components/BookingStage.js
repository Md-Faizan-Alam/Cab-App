import React from 'react'
import AvailableCabs from './AvailableCabs'
import CabBooking from './CabBooking'

const BookingStage = (props) => {

    const bookingStage = {
        booking: CabBooking,
        available: AvailableCabs
    }
    const Stage = bookingStage[props.stage];

  return (
    <>
    <Stage/>
    </>
  )
}

export default BookingStage