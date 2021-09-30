import { SAVE_ORDER_DETAILS } from "../types";

const initialState = {};

const OrderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SAVE_ORDER_DETAILS:
            return { order: action.payload };
        default:
            return state;
    }
}

export default OrderReducer