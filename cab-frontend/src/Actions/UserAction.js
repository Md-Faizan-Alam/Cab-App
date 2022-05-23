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
}

export const setUser = (user)=>{
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const saveUser = (user,cab)=>{

    return async(dispatch) => {
        const response = await axios.post('http://localhost:3333/saveUser',{user: user, cab:cab});
        console.log('RESULT Data: ', response.data);
        dispatch({
            type: 'SAVE_USER',
            payload: response.data
        })
    }
}