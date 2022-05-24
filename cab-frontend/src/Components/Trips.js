import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Trips = (props) => {
  const [tripList,setTripList] = useState([]);
  const user = useSelector(state=>state.user);

  useEffect(() => {
    console.log('Trips component Rendered');
    const getTrips = async () => {
      console.log('admin trips fetched')
      const response = await axios.get("http://localhost:3333/trips");
      setTripList(response.data);
    }
    const getTripsCustomer = async () => {
      console.log('customer trips fetched')
      const response = await axios.get(`http://localhost:3333/tripsCustomer/${user.user_id}`);
      setTripList(response.data);
    }
    const getTripsDriver = async () => {
      console.log('driver trips fetched')
      const response = await axios.get(`http://localhost:3333/tripsDriver/${user.user_id}`);
      setTripList(response.data);
    }
    if(user.type === 'admin'){
      getTrips();
    }else if(user.type === 'customer'){
      getTripsCustomer();
    }else if(user.type === 'driver'){
      getTripsDriver();
    }
    console.log(tripList);
  },[]);

  const trips = tripList ? tripList.map((trip) =>
    <tr key={trip.trip_id}>
      <th scope="row">{trip.trip_id}</th>
      <td >{trip.from_location}</td>
      <td >{trip.to_location}</td>
      <td >{trip.from_time}</td>
      <td >{trip.fare}</td>
    </tr>
  ) : <tr><td colSpan={5}>Not Found</td></tr>

  return (
    <>
      {/* <h1>{}</h1> */}
      <table className="table text-light table-borderless" style={{ fontSize: '2vw' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Date</th>
            <th scope="col">Payment (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {trips}
          {/* <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td >Exide</td>
            <td >Narkelbagan</td>
            <td >03/05/22</td>
            <td >250</td>
          </tr> */}

        </tbody>
      </table>
    </>
  );
}

export default Trips;