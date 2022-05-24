import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from '../Actions/StageAction';
import { setRide } from "../Actions/TripAction";

const CabBooking = (props) => {
    const user = useSelector(state=>state.user);

    const dispatch = useDispatch();

    function handleNext() {
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const ride = document.getElementById('ride').value;

        const locationMap = {
            Exide: 0,
            Shyambazar: 1,
            Narkelbagan: 2,
            CityCenter1: 3,
            JodhpurPark: 4,
            EMBypass: 5,
            DumDum: 6,
            QuestMall: 7,
            Khidderpore: 8
        }
        const distance = Math.abs(locationMap[from] - locationMap[to]);

        const time = Date.now();
        const trip = {
            fare: null,
            distance: distance,
            from_time: time,
            to_time: time,
            from_location: from,
            to_location: to,
            ride: ride,
            customer_id: user.user_id,
            driver_id: null
        }
        dispatch(setRide(trip));
        dispatch(setStage('available'));
    }

    return (
        <>
            <form style={{ paddingTop: '3vw' }}>
                <table className="table text-light table-borderless table-responsive-xl" style={{ marginTop: '4vw' }}>
                    <tbody>
                        <tr>
                            <td className="text-start" style={{ paddingBottom: '3vw' }}><span style={{ paddingLeft: '2vw' }}>From:</span> </td>
                            <td><select className="position-relative" style={{ width: '100%', height: '4vw', fontSize: '2vw', padding: '0vw 2vw', right: '1vw' }} id="from" aria-label="Default select example">
                                <option defaultValue={'Exide'}>Exide</option>
                                <option value="Shyambazar">Shyambazar</option>
                                <option value="Narkelbagan">Narkelbagan</option>
                                <option value="CityCenter1">CityCenter1</option>
                                <option value="JodhpurPark">JodhpurPark</option>
                                <option value="EMBypass">EMBypass</option>
                                <option value="DumDum">DumDum</option>
                                <option value="QuestMall">QuestMall</option>
                                <option value="Khidderpore">Khidderpore</option>
                            </select></td>
                            <td className="text-end" style={{ paddingBottom: '3vw' }}><span style={{ paddingRight: '2vw' }}>To: </span></td>
                            <td><select className="position-relative" style={{ width: '100%', height: '4vw', fontSize: '2vw', padding: '0vw 2vw', right: '2vw' }} id="to" aria-label="Default select example">
                                <option value='Exide'>Exide</option>
                                <option value="Shyambazar">Shyambazar</option>
                                <option value="Narkelbagan">Narkelbagan</option>
                                <option value="CityCenter1">CityCenter1</option>
                                <option value="JodhpurPark">JodhpurPark</option>
                                <option value="EMBypass">EMBypass</option>
                                <option value="DumDum">DumDum</option>
                                <option value="QuestMall">QuestMall</option>
                                <option value="Khidderpore">Khidderpore</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="text-end" style={{ paddingBottom: '3vw' }}>Rides: </td>
                            <td><select style={{ width: '100%', height: '4vw', fontSize: '2vw', padding: '0vw 2vw' }} id="ride" aria-label="Default select example">
                                <option defaultValue={'Share'}>Share</option>
                                <option value="Intercity">Intercity</option>
                                <option value="Rentals">Rentals</option>
                                <option value="Prime">Prime</option>
                                <option value="Out-Station">Out-Station</option>
                                <option value="Mini">Mini</option>
                                <option value="Micro">Micro</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={1}><svg xmlns="http://www.w3.org/2000/svg" onClick={handleNext} role="button" fill="#ffc107" width="80" height="80" style={{ width: '5vw', height: '5vw' }} className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                            </svg></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}

export default CabBooking;

// background: transparent url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e) center/1em auto no-repeat;