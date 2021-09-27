import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducers/userReducers"
import uiReducer from "./reducers/uiReducers"
import productListReducer from "./reducers/productListReducer"
import productDetailsReducer from "./reducers/productDetailsReducer"

const initialState = {};
const middleware = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const reducer = combineReducers({
    user: userReducer,//user key ma store gareko
    UI: uiReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer
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