// redux
import {ActionType} from "../action-types";
import {Dispatch} from "redux";
import {CartAction} from "../actions";
import {State} from "../store";
// types
import {CartItem} from "../../utils/types";

export const addToCart = (product: CartItem) => (dispatch: Dispatch<CartAction>, getState: () => State) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((x) => {
        if (x._id === product._id) {
            alreadyExists = true;
            x.count++;
        }
    });
    if (!alreadyExists) {
        cartItems.push({...product, count : 1});
    }
    dispatch({
       type: ActionType.ADD_TO_CART,
       payload: cartItems
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (product: CartItem) => (dispatch: Dispatch<CartAction>, getState: () => State) => {
    const cartItems = getState().cart.cartItems.slice().filter(x => x._id !== product._id);
    dispatch({
        type: ActionType.REMOVE_FROM_CART,
        payload: cartItems
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};