import { CART_ADD_ITEM } from "../types";


const initialState: CartItemState = {
    cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems') || ' ' ) : []
};

const cartReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
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
        default:
            return state;
    }
}

export default cartReducer