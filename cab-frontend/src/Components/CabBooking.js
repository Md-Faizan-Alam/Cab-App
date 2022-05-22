import React from "react";
import { useDispatch } from "react-redux";
import {setStage} from '../Actions/StageAction';

const CabBooking = (props) => {
    const dispatch = useDispatch();

    function handleNext(){
        dispatch(setStage('available'));
    }

    return (
        <>
            <form style={{paddingTop: '3vw'}}>
                <table className="table text-light table-borderless table-responsive-xl" style={{marginTop: '4vw'}}>
                    <tbody>
                        <tr>
                            <td className="text-start" style={{paddingBottom: '3vw'}}><span style={{paddingLeft: '2vw'}}>From:</span> </td>
                            <td><select className="position-relative" style={{width: '100%',height: '4vw',fontSize: '2vw', padding: '0vw 2vw', right: '1vw'}} aria-label="Default select example">
                                <option defaultValue={0}>Exide</option>
                                <option value="1">Shyambazar</option>
                                <option value="2">Narkelbagan</option>
                                <option value="3">Seven-Point</option>
                            </select></td>
                            <td className="text-end" style={{paddingBottom: '3vw'}}><span style={{paddingRight: '2vw'}}>To: </span></td>
                            <td><select className="position-relative" style={{width: '100%', height: '4vw',fontSize: '2vw', padding: '0vw 2vw', right: '2vw'}} aria-label="Default select example">
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
                            <td className="text-end" style={{paddingBottom: '3vw'}}>Rides: </td>
                            <td><select style={{width: '100%', height: '4vw',fontSize: '2vw', padding: '0vw 2vw'}} aria-label="Default select example">
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
                    {/* <tr>
                        <td colSpan="4"><button type="button" className="btn btn-warning" style={{fontSize: '3vw',padding: '0vw 2vw', fontWeight:'500'}}>Next</button></td>
                    </tr> */}
                    <tr>
                            <td colSpan={4}>
                                <button
                                    type="button"
                                    className="btn btn-warning fw-bold position-relative"
                                    style={{ fontSize: '2vw', padding: '0.5vw 2vw', top:'2vw' }}
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </form>
        </>
    );
}

export default CabBooking;