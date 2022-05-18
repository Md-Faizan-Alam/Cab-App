import React from 'react';

const Modal = (props)=>{
    return(
        <>
        <div
                className="modal fade text-dark"
                id="exampleModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-warning border-3 border-light">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fw-bold" style={{fontSize: '2.5vw'}} id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body fw-bold text-start" style={{fontSize: '1.5vw'}}>Are you sure?<br/>This can't be undone</div>
                        <div className="modal-footer border-0">
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn btn-dark">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;