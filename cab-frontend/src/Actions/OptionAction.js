import axios from "axios";

export const setOption = ()=>{
    return async(dispatch) => {
        const response = await axios.get('http://localhost:3333/available');
        console.log('API Data: ', response.data);
        dispatch({
            type: 'SET_OPTION',
            payload: response.data
        })
    }
}