import { CART_ADD_ITEM, CART_REMOVE_ITEM, EMPTY_CART, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from "../types";

const initialState: CartItemState = {
    cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems') || '' ) : [],
    shippingAddress: localStorage.getItem('shippingAddress')? JSON.parse(localStorage.getItem('shippingAddress') || '' ) : {},
    paymentMethod: 'Stripe'
};

const cartReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            if(state.cartItems !== null) {
                // checking if cart have the item already
                const existItem = state.cartItems.find(citem => citem.product === item.product)
                if(existItem) {
                    return {
                        ...state,
                        // update the existed item
                        cartItems: state.cartItems.map((citem) => 
                            citem.product === existItem.product ? item : citem
                        )
                    }
                } else {
                    // add item to cart
                    return {...state, cartItems: [...state.cartItems, item]}
                }
            } else {
                return {...state, cartItems: [item]}
            }
        case CART_REMOVE_ITEM:
            return { ...state, cartItems: state.cartItems?.filter( cItem => cItem.product !== action.payload)}
        case EMPTY_CART:
            return state
        case CART_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload}
        case CART_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        default:
            return state;
    }
}

export default cartReducer