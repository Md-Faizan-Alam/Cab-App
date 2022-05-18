import React from 'react';

const Profile = (props)=>{
    return(
        <>
        <table className="table text-light table-borderless table-responsive-xl position-relative" style={{top: '3vw'}}>
                <tbody>
                  <tr>
                    <td className="text-start ps-3">Name: </td>
                    <td className="text-start">Jake lockley</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Email: </td>
                    <td className="text-start">jake.lockley@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Phone Number: </td>
                    <td className="text-start">9999999999</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Car-type: </td>
                    <td className="text-start">SUV</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">No. of Cars: </td>
                    <td className="text-start">3</td>
                  </tr>
                </tbody>
              </table>
        </>
    );
}

export default Profile;