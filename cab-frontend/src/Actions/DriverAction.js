import axios from "axios";

export const getDriver = (id) => {
    return async(dispatch) => {
        const response = await axios.get('http://localhost:3333/userById/'+id);
        console.log('Driver that we got from the database: ', response.data);
        dispatch({
            type: 'GET_DRIVER',
            payload: response.data
        })
    }
}