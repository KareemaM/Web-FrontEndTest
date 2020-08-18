import { 
    SET_USER,
    SET_ERRORS,
} from './type';
import { push } from "connected-react-router";
import axios from 'axios'

export const signupUser = (newUserData, history) => (dispatch) => {
    console.log(newUserData);
    // history.push('/products');
    axios
        .post('/users/register', newUserData)
        .then((res) => {
           
            window.location.href = "/products"
        })
        .catch((err) => {
            try{
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                  });
              }
              catch{
                  console.log(err)
              }
        })
}

export const loginUser = (newUserData, history) => (dispatch) => {
    console.log(newUserData);
    // history.push('/products');
    axios
        .post('/users/login', newUserData)
        .then((res) => {
            
            window.location.href = "/products"
        })
        .catch((err) => {
            try{
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                  });
              }
              catch{
                dispatch({ type: SET_USER });
                history.push('/products');
              }
        })
}