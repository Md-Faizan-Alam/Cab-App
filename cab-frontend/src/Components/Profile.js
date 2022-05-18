import React from 'react';

const Profile = (props)=>{
    return(
        <>
        <table className="table text-light table-borderless table-responsive-xl" style={{marginTop: '3vw'}}>
                <tbody>
                  <tr>
                    <td className="text-start ps-3" style={{padding: '1vw'}}>Name: </td>
                    <td className="text-start" style={{padding: '1vw'}}>Jake lockley</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3" style={{padding: '1vw'}}>Email: </td>
                    <td className="text-start" style={{padding: '1vw'}}>jake.lockley@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3" style={{padding: '1vw'}}>Phone Number: </td>
                    <td className="text-start" style={{padding: '1vw'}}>9999999999</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3" style={{padding: '1vw'}}>Car-type: </td>
                    <td className="text-start" style={{padding: '1vw'}}>SUV</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3" style={{padding: '1vw'}}>No. of Cars: </td>
                    <td className="text-start" style={{padding: '1vw'}}>3</td>
                  </tr>
                </tbody>
              </table>
        </>
    );
}

export default Profile;