import Axios from "axios";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from "../types";

export const signin = (username: string, password: string) => (dispatch: any) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } })

    Axios.post("http://localhost:3001/auth/login", {username, password})
    .then(res => {
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data })
        localStorage.setItem("userInfo", JSON.stringify(res.data))
        
    }).catch(error => {
        let errorMessage = "Something went wrong"
        if(error.response.status === 401) {
            errorMessage = error.response.data.msg
        } else if(error instanceof Error) {
            errorMessage = error.message
        }
        dispatch({ type: USER_SIGNIN_FAIL, payload: errorMessage })
    });
}

export const signout = () => (dispatch: any) => {
    localStorage.removeItem('cartItems')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    dispatch({ type: USER_SIGNOUT })
    document.location.href = '/'
}

export const register = (username: string, email: string, password: string) => (dispatch: any) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { username, password } })

    Axios.post("http://localhost:3001/register", {username, email, password})
    .then(res => {
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data })
        localStorage.setItem("userInfo", JSON.stringify(res.data))
        
    }).catch(error => {
        console.log(error);
        console.log("error.response----", error.response);
        let errorMessage = "Something went wrong"
        if(error.response.status === 400) {
            errorMessage = error.response.data.msg
        } else if(error instanceof Error) {
            errorMessage = error.message
        }
        dispatch({ type: USER_REGISTER_FAIL, payload: errorMessage })
    });
}