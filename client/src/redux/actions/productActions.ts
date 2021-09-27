import Axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../types"


export const listProducts = () => async ( dispatch: any ) => {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    try {
        const { data } = await Axios.get("/api/products")
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch(error) {
        let errorMessage = "Something went wrong"
        if(error instanceof Error) {
            errorMessage = error.message
        }
        dispatch({ type: PRODUCT_LIST_FAIL, payload: errorMessage })
    }
}

export const detailsProduct = (productId: string) => async(dispatch: any) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
        const { data } = await Axios.get(`/api/product/${productId}`)
        console.log("data here", data);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error: any) {
        console.log("error.response", error.response);
        console.log("error.response.data.message", error.response.data.message);

        
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data 
                    ? error.response.data
                    : error.message,
        })
    }
}