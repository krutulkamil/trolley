// redux
import {ActionType} from "../action-types";
import {OrderAction} from "../actions";

export const orderReducer = (state = {order: null, orders: null}, action: OrderAction) => {
    switch (action.type) {
        case ActionType.CREATE_ORDER:
            return {
                order: action.payload
            };
        case ActionType.CLEAR_ORDER:
            return {
                order: null
            }
        case ActionType.FETCH_ORDERS:
            return {
                orders: action.payload
            }
        default:
            return state
    }
}