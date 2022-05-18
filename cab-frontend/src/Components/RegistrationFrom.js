import React from 'react';

const RegistrationForm = (props)=>{
    return(
        <>
        <div class="conatiner bg-dark w-75 m-auto text-center text-light position-relative" style={{top: '10vw', fontSize: '3vw', opacity: '0.9',borderRadius: '20px', paddingTop: '2vw',height: '60vw'}}>
        <div class="fw-bold text-decoration-underline text-warning">Drive to fulfill your dreams</div>
        <form>
          <table class="table text-light table-borderless table-responsive-xl" style={{marginTop: '4vw'}}>
            <tbody>
              <tr>
                <td class="text-end" style={{paddingBottom: '3vw'}}>Name: </td>
                <td><input type="text" class="form-control w-75" style={{height: '4vw',fontSize: '2vw'}} placeholder="Enter your full name"/></td>
              </tr>
              <tr>
                <td class="text-end" style={{paddingBottom: '3vw'}}>Email: </td>
                <td><input type="email" class="form-control w-75" style={{height: '4vw',fontSize: '2vw'}} placeholder="Enter your Email"/></td>
              </tr>
              <tr>
                <td class="text-end" style={{paddingBottom: '3vw'}}>Password: </td>
                <td><input type="password" class="form-control w-75" style={{height: '4vw',fontSize: '2vw'}} placeholder="Enter a password"/></td>
              </tr>
              <tr>
                <td class="text-end" style={{paddingBottom: '3vw'}}>Confirm Password: </td>
                <td><input type="password" class="form-control w-75" style={{height: '4vw',fontSize: '2vw'}} placeholder="Confirm your password"/></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" class="btn btn-warning" style={{fontSize: '2vw',padding: '0vw 1vw'}}>Register</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
        </>
    );
}

export default RegistrationForm;