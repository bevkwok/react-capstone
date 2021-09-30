import { SAVE_ORDER_DETAILS } from "../types";

export const saveOrderDetails = (order: any) => (dispatch: any) => {
    dispatch({ type: SAVE_ORDER_DETAILS, payload: order });
    localStorage.setItem('orderDetails', JSON.stringify(order));
    
};