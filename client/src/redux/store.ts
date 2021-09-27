import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducers/userReducers"
import productListReducer from "./reducers/productListReducer"
import productDetailsReducer from "./reducers/productDetailsReducer"
import cartReducer from "./reducers/cartReducers"

const initialState = {};
const middleware = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const reducer = combineReducers({
    user: userReducer,//user key ma store gareko
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

const store = createStore(
    reducer, 
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any
    )
);

export default store;