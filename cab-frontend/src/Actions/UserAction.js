import axios from "axios";

export const validateUser = (userName, password, type) => {
    return async(dispatch) => {
        const response = await axios.post('http://localhost:3333/validation',{
            type: type,
            userName: userName,
            password: password
        });
        console.log('API Data: ', response.data);
        dispatch({
            type: 'VALIDATE_USER',
            payload: response.data
        })
    }


    // return{
    //     type: 'VALIDATE_USER',
    //     userName: userName,
    //     password: password,
    //     userType: type
    // }
}


// export const validateUser = (userName, password, passedType) => {
//     return async (dispatch) => {
//         const response = await axios.get(`http://localhost:3333/${passedType}`);
//         console.log(response.data[0]);
//         dispatch({
//             type: 'VALIDATE_USER',
//             payload: response.data[0],
//             userName: userName,
//             password: password
//         })
//     }
// }