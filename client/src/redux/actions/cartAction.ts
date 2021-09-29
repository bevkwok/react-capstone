import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, EMPTY_CART, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from "../types";

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

export const emptycart = () => (dispatch: any) => {
    dispatch({type: EMPTY_CART})
    localStorage.setItem('cartItems', '')
}

export const saveShippingAddress = (data: any) => (dispatch: any) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data: string) => (dispatch: any) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};