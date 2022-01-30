// redux
import {ActionType} from "../action-types";
// types
import {CartItem, Order} from "../../utils/types";

interface CreateOrderAction {
    type: ActionType.CREATE_ORDER
    payload: Order;
}

interface ClearOrderAction {
    type: ActionType.CLEAR_ORDER
}

interface FetchOrdersAction {
    type: ActionType.FETCH_ORDERS;
    payload: Order[] | []
}

export type OrderAction = CreateOrderAction | ClearOrderAction | FetchOrdersAction;

interface AddToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: {cartItems: CartItem};
}

interface RemoveFromCartAction {
    type: ActionType.REMOVE_FROM_CART;
    payload: { cartItems: CartItem};
}

export type CartAction = AddToCartAction | RemoveFromCartAction;