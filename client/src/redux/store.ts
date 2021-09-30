import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers"
import productListReducer from "./reducers/productListReducer"
import productDetailsReducer from "./reducers/productDetailsReducer"
import cartReducer from "./reducers/cartReducers"
import OrderReducer from "./reducers/orderReducers"

const initialState = {};
const middleware = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    order: OrderReducer
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