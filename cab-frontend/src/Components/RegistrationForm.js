import React from 'react';
import { useSelector } from 'react-redux';

const RegistrationForm = (props)=>{
    return(
        <>
        <div className="conatiner bg-dark w-75 m-auto text-center text-light position-relative" style={{top: '10vw', fontSize: '3vw', opacity: '0.9',borderRadius: '3vw', paddingTop: '2vw',height: '50vw'}}>
        <div className="fw-bold text-decoration-underline text-warning" style={{padding: '1vw'}}>A car for every occasion</div>
        <form>
          <table className="table text-light table-borderless table-responsive-xl" style={{marginTop: '4vw'}}>
            <tbody>
              <tr>
                <td className="text-end">Name: </td>
                <td ><input type="text" className="form-control w-75" style={{height: '4vw',fontSize: '2vw',padding: '1vw'}} placeholder="Enter your full name"/></td>
              </tr>
              <tr>
                <td className="text-end">Email: </td>
                <td ><input type="email" className="form-control w-75" style={{height: '4vw',fontSize: '2vw',padding: '1vw'}} placeholder="Enter your Email"/></td>
              </tr>
              <tr>
                <td className="text-end">Password: </td>
                <td ><input type="password" className="form-control w-75" style={{height: '4vw',fontSize: '2vw',padding: '1vw'}} placeholder="Enter a password"/></td>
              </tr>
              <tr>
                <td className="text-end">Confirm Password: </td>
                <td ><input type="password" className="form-control w-75" style={{height: '4vw',fontSize: '2vw',padding: '1vw'}} placeholder="Confirm your password"/></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning" style={{fontSize: '2vw',padding: '0vw 1vw'}}>Register</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
        </>
    );
}

export default RegistrationForm;