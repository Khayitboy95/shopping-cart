import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import booksReducer from "./books";
import cartReducer from "./cart";
import filterReducer from "./filter";

let reducers = combineReducers({
    booksPage:booksReducer,
    cartPage:cartReducer,
    filter:filterReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;