import React from 'react';

const PhonePrompt = (props)=>{
    return(
        <>
        <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{top: '10vw', fontSize: '3vw', opacity: '0.9',borderRadius: '20px', paddingTop: '2vw',height: '30vw'}}>
        <div className="fw-bold text-decoration-underline text-warning">Drive to fulfill your dreams</div>
        <form>
          <table className="table text-light table-borderless" style={{marginTop: '4vw'}}>
            <tbody>
              <tr>
                <td>Phone: </td>
                <td><input type="text" className="form-control w-75" style={{height: '4vw',fontSize: '2vw',}} placeholder="Enter your phone number"/></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning"  style={{fontSize: '2vw',padding: '0vw 1vw'}}>Next</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
        </>
    );
}

export default PhonePrompt;