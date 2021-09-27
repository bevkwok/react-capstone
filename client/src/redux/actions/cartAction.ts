import Axios from "axios";
import { CART_ADD_ITEM } from "../types";

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
        }).catch(error => {
            console.log(error);
        });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}