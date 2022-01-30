// redux
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {cartReducer} from "./reducers/cartReducers";
import {orderReducer} from "./reducers/orderReducers";

const initialState = {};
const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const reducers = combineReducers({
    cart: cartReducer,
    order: orderReducer
})

const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

export type State = ReturnType<typeof reducers>;


