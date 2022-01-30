// redux
import {ActionType} from "../action-types";
import {Dispatch} from "redux";
import {OrderAction} from "../actions";
// types
import {CreateOrder} from "../../utils/types";

export const createOrder = (order: CreateOrder) => (dispatch: Dispatch<OrderAction>) => {
    fetch("http://localhost:8000/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ActionType.CREATE_ORDER,
                payload: data
            });
            localStorage.removeItem("cartItems");
            dispatch({
                type: ActionType.CLEAR_ORDER,
            });
        });
};

export const clearOrder = () => (dispatch: Dispatch<OrderAction>) => {
    dispatch({
        type: ActionType.CLEAR_ORDER
    });
};

export const fetchOrders = () => (dispatch: Dispatch<OrderAction>) => {
    fetch("http://localhost:8000/api/orders")
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ActionType.FETCH_ORDERS,
                payload: data
            });
        });
};