import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props)=>{
  const navigate = useNavigate();
    function handleLogin(){
      navigate('interface');
    }

    return(
        <>
        <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{top: '10vw', fontSize: '3vw', opacity:'0.9',borderRadius: '3vw', paddingTop: '2vw',height: '35vw'}}>
        <div className="fw-bold text-decoration-underline text-warning">Login</div>
        <form>
          <table className="table text-light table-borderless" style={{marginTop: '4vw'}}>
            <tbody>
              <tr>
                <td className="text-end" >Name: </td>
                <td ><input type="text" className="form-control w-75" style={{height: '4vw',fontSize: '2vw',padding: '1vw'}} id="inputPassword2" placeholder="Enter your full name"/></td>
              </tr>
              <tr>
                <td className="text-end" >Password: </td>
                <td ><input type="password" className="form-control w-75" style={{height: '4vw',fontSize: '2vw',padding: '1vw'}} id="inputPassword2" placeholder="Enter your password"/></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning" onClick={handleLogin} style={{fontSize: '2vw',padding: '0vw 1vw'}}>Login</button></td>
              </tr>
            </tbody>
          </table>
      </form>
      </div>
      </>
    );
}

export default LoginForm;