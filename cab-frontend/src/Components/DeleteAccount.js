import React from 'react';

const DeleteAccount = (props) => {
    return (
        <>
            <form>
                <table className="table text-light table-borderless table-responsive-xl" style={{ marginTop: '0vw' }}>
                    <tbody>
                        <tr>
                            <td colSpan={3} style={{ height: '20vw' }}><span className='position-relative text-warning fw-bold text-decoration-underline' style={{ top: '8vw' }}>Enter your password to continue</span></td>
                        </tr>
                        <tr>
                            <td className="text-end">Password: </td>
                            <td ><input type="password" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter a password" /></td>
                        </tr>
                        <tr>
                            <td className="text-end">Confirm Password: </td>
                            <td ><input type="password" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Confirm your password" /></td>
                        </tr>
                        <tr>
                            {/* <td colSpan="2"><button type="button" className="btn btn-warning" style={{ fontSize: '2vw', padding: '0vw 1vw' }}>Confirm Deletion</button></td> */}
                            <td colSpan={2}>
                                <button
                                    type="button"
                                    className="btn btn-warning fw-bold"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ fontSize: '2vw', padding: '0vw 1vw' }}
                                >
                                    Confirm Deletion
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}

export default DeleteAccount;