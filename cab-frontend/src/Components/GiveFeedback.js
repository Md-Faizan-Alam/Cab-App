import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const GiveFeedback = (props) => {
    const [feedBack,setFeedBack] = useState('');
    const navigate = useNavigate();
    function handleTyping(e){
        setFeedBack(e.target.value);
    }
    function handleSubmit(){
        setFeedBack('');
    }
    return (
        <>
            <table className="table text-light table-borderless table-responsive-xl position-relative" style={{ top: '3vw' }}>
                <tbody>
                    <tr>
                        <td className="text-middle" >Your Feedback: </td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td><textarea rows="4" cols="40" name="comment" onChange={handleTyping} value={feedBack} className="text-center bg-warning " style={{ fontSize: '2vw', border: '5px solid' }} placeholder="Leave a feedback for us!!"></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                type="button"
                                className="btn btn-warning fw-bold position-relative"
                                style={{ fontSize: '2vw', padding: '1vw 2vw', top: '2vw' }}
                                onClick={handleSubmit}
                            >
                                Submit Feedback
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    );
}

export default GiveFeedback;