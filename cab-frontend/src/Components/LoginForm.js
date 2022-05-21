import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const [passType , setPassType] = useState(false);

  const navigate = useNavigate();
  function handleLogin() {
    navigate('interface');
  }
  function handleShow() {
    console.log("Entering handleShow");
    setPassType(!passType);
  
  }


  return (
    <>

      <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{ top: '10vw', fontSize: '3vw', opacity: '0.9', borderRadius: '3vw', paddingTop: '2vw', height: '35vw' }}>
        <div className="fw-bold text-decoration-underline text-warning">Login</div>
        <form>
          <table className="table text-light table-borderless" style={{ marginTop: '2vw' }}>
            <tbody>
              <tr>
                <td className="text-end" >Name: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} id="inputPassword2" placeholder="Enter your full name" /></td>
              </tr>
              <tr>
                <td className="text-end" >Password: </td>
                <td ><input type={passType ? "text" : "password"} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} id="inputPassword2" placeholder="Enter your password" /></td>
              </tr>
              {/* <tr>
                <td colSpan={2} style={{fontSize: '1.5vw'}} >Show Password<input onChange={handleShow} checked={passType} type="checkbox" className="form-check-input" style={{ padding: '0.5vw', marginLeft:'1vw' }} id="inputPassword2"  /></td>
              </tr> */}
              <tr>
                <td colSpan={2} style={{fontSize: '1.5vw', lineHeight:'0.2vw'}} ><Link to="/phoneCustomer" class="link-warning">New here? Create an account as a customer</Link></td>
              </tr>
              <tr>
                <td colSpan={2} style={{fontSize: '1.5vw' , lineHeight:'0.2vw'}} ><Link to="/phoneDriver" class="link-warning">or as a driver</Link></td>
              </tr>

              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning" onClick={handleLogin} style={{ fontSize: '2vw', padding: '0vw 1vw' }}>Login</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default LoginForm;