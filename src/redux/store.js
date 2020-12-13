import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import booksReducer from "./books";
import cartReducer from "./cart";

let reducers = combineReducers({
    booksPage:booksReducer,
    cartPage:cartReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;