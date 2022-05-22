import React from 'react';
import { useSelector } from 'react-redux';

const Profile = (props)=>{
  const user = useSelector(state=>state.user);

  function getRowDisplay(field){
    if(field==='carType' && user.type!=='driver'){
      return 'none';
    }
    return '';
  }
    return(
        <>
        <table className="table text-light table-borderless table-responsive-xl position-relative" style={{top: '3vw'}}>
                <tbody>
                  <tr>
                    <td className="text-start ps-3">Name: </td>
                    <td className="text-start">{user.first_name} {user.last_name}</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Email: </td>
                    <td className="text-start">{user.email}</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Phone Number: </td>
                    <td className="text-start">{user.phone}</td>
                  </tr>
                  <tr style={{display: getRowDisplay('carType')}}>
                    <td className="text-start ps-3">Car-type: </td>
                    <td className="text-start">SUV</td>
                  </tr>
                </tbody>
              </table>
        </>
    );
}

export default Profile;