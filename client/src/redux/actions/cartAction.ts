import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";

export const addToCart = (productId: string, qty: string) => async(dispatch: any, getState: any) => {
    Axios.get(`http://localhost:3001/product/${productId}`)
        .then(res => {
            const product = res.data.product
            dispatch({ 
                type: CART_ADD_ITEM, 
                payload: {
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    countInStock: product.countInStock,
                    product: product._id,
                    qty
                } 
            })
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
        }).catch(error => {
            console.log(error);
        });
    
}

export const removeFromCart = (productId: string) => (dispatch: any, getState: any) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId})
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}