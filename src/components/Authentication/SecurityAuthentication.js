import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from '../API/types';
import setJWTToken from '../../SecurityUtils/setJWTToken';



export const createNewUser = (newUser, history) => async dispatch =>{
    try {
        await axios.post("http://localhost:8080/api/auth/login/register", newUser);
        history.push("/SignIn")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const login = LoginRequest => async dispatch => {
    try {
    //axios post => login request
   const res = await axios.post("http://localhost:8080/api/auth/login", LoginRequest);
    //extract the token from the rest data
    const { token } = res.data
    //store the token in the local storage
   localStorage.setItem("jwtToken", token)
    //set our token in the headers ***
   setJWTToken(token)
    //decode token on react to get the pay load we have here
    const decoded = jwt_decode(token);
    //dispatch to our secureity reducer
    dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
    });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}


export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken")
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
}