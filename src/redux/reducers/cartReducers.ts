// redux
import {ActionType} from "../action-types";
import {CartAction} from "../actions";

const initialState = {cartItems: JSON.parse(localStorage.getItem('cartItems') || "[]")};

export const cartReducer = (state = initialState , action: CartAction ) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return {
                cartItems: action.payload
            };
        case ActionType.REMOVE_FROM_CART:
            return {
                cartItems: action.payload
            };
        default:
            return state;
    }
};