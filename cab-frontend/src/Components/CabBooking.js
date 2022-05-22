import React from "react";
import { useDispatch } from "react-redux";
import { setStage } from '../Actions/StageAction';

const CabBooking = (props) => {
    const dispatch = useDispatch();

    function handleNext() {
        dispatch(setStage('available'));
    }

    return (
        <>
            <form style={{ paddingTop: '3vw' }}>
                <table className="table text-light table-borderless table-responsive-xl" style={{ marginTop: '4vw' }}>
                    <tbody>
                        <tr>
                            <td className="text-start" style={{ paddingBottom: '3vw' }}><span style={{ paddingLeft: '2vw' }}>From:</span> </td>
                            <td><select className="position-relative" style={{ width: '100%', height: '4vw', fontSize: '2vw', padding: '0vw 2vw', right: '1vw' }} aria-label="Default select example">
                                <option defaultValue={0}>Exide</option>
                                <option value="1">Shyambazar</option>
                                <option value="2">Narkelbagan</option>
                                <option value="3">Seven-Point</option>
                            </select></td>
                            <td className="text-end" style={{ paddingBottom: '3vw' }}><span style={{ paddingRight: '2vw' }}>To: </span></td>
                            <td><select className="position-relative" style={{ width: '100%', height: '4vw', fontSize: '2vw', padding: '0vw 2vw', right: '2vw' }} aria-label="Default select example">
                                <option defaultValue={0}>Exide</option>
                                <option value="1">Shyambazar</option>
                                <option value="2">Narkelbagan</option>
                                <option value="3">Seven-Point</option>
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
                            <td><select style={{ width: '100%', height: '4vw', fontSize: '2vw', padding: '0vw 2vw' }} aria-label="Default select example">
                                <option defaultValue={0}>Share</option>
                                <option value="1">Intercity</option>
                                <option value="2">Bike</option>
                                <option value="3">Prime</option>
                                <option value="4">Mini</option>
                                <option value="5">Rentals</option>
                                <option value="6">Sedan</option>
                                <option value="7">Micro</option>
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
                            <td colSpan={1}><svg xmlns="http://www.w3.org/2000/svg" onClick={handleNext} role="button" fill="#ffc107" width="80" height="80" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
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