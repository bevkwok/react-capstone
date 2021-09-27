import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from "../types"
import axios from "axios"

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })

    axios.post("login", userData)
    .then((res) => {
        const token = `Bearer ${res.data.token}`;
        localStorage.setItem("token", `Bearer ${res.data.token}`);//setting token to local storage
        axios.defaults.headers.common["Authorization"] = token;//setting authorize token to header in axios
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        console.log("success");
        history.push("/");//redirecting to index page after login success
    })

    .catch((err) => {
        console.log(err);
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    });
}

//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
    dispatch({ type: LOADING_USER });
    axios.get("/user")
        .then(res => {
            console.log("user data", res.data);
            dispatch({
                type: SET_USER,
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
        });
}

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem("token")
    delete axios.defaults.headers.common["Authorization"]
    dispatch({
        type: SET_UNAUTHENTICATED
    })
    window.location.href = "/login" //redirect to login page
}

//    NOTE:your server must return response like as follow for getting the authenticated user information getUserData function must return response as
//    {
//     “credentials”: {
//     “createdAt”: “2020–01–30T10:29:44.898Z”,
//     “email”: “bikash@gmail.com”,
//     “userId”: “D4hCBB4RcAdTjawNCQ0K4ItED563”
//     }
//    }