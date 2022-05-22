import axios from "axios";

export const validateUser = (userName, password, passedType) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3333/${passedType}`);
        console.log(response.data[0]);
        dispatch({
            type: 'VALIDATE_USER',
            payload: response.data[0],
            userName: userName,
            password: password
        })
    }
}
// export const fetchPostsAction = () => {
//     return async (dispatch) => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log('API Data: ', response.data);
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response.data
//         })
//     }
// }