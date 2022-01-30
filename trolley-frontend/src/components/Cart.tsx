// react
import React, {ChangeEvent, FormEvent, FunctionComponent, useState} from 'react';
// redux
import {useSelector, useDispatch} from "react-redux";
import {State} from "../redux/store";
import {removeFromCart} from "../redux/action-creators/cartActions";
import {createOrder, clearOrder} from "../redux/action-creators/orderActions";
// animations
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// modal
import Modal from 'react-modal';

interface InitialState {
    name: string;
    email: string;
    address: string;
    showCheckout: boolean;
}

const Cart: FunctionComponent = (): JSX.Element => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: State) => state.cart.cartItems);
    const order = useSelector((state: State) => state.order.order);

    const [values, setValues] = useState<InitialState>({
        name: "",
        email: "",
        address: "",
        showCheckout: false
    });

    const {name, email, address, showCheckout} = values;

    const handleOrder = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const order = {
            name,
            email,
            address,
            cartItems,
            total: cartItems.reduce((a, c) => (a + c.price * c.count), 0)
        };

        dispatch(createOrder(order));
    };

    const handleInputChange = (name: string) => (e: ChangeEvent<HTMLInputElement>): void => {
        setValues({...values, [name]: e.target.value});
    };

    const closeModal = (): void => {
        dispatch(clearOrder());
    };

    return (
        <div>
            {cartItems.length === 0 ?
                <div className="cart cart-header">Cart is empty</div>
                :
                <div className="cart cart-header">You have {cartItems.length} in the cart {" "}</div>
            }

            {
                order && (
                    <Modal
                        isOpen={true}
                        onRequestClose={closeModal}
                        appElement={document.getElementById('root')}
                    >
                        <Zoom>
                            <button className="close-modal" onClick={closeModal}>x</button>
                            <div className="order-details">
                                <h3 className="success-message">Your order has been placed</h3>
                                <h2>Order {order._id}</h2>
                                <ul>
                                    <li>
                                        <div>Name: </div>
                                        <div>{order.name}</div>
                                    </li>
                                    <li>
                                        <div>Email: </div>
                                        <div>{order.email}</div>
                                    </li>
                                    <li>
                                        <div>Address: </div>
                                        <div>{order.address}</div>
                                    </li>
                                    <li>
                                        <div>Date: </div>
                                        <div>{order.createdAt}</div>
                                    </li>
                                    <li>
                                        <div>Total: </div>
                                        <div>€{order.total}</div>
                                    </li>
                                    <li>
                                        <div>Cart Items: </div>
                                        <div>{order.cartItems.map(x => (
                                            <div>{" "} {x.count} {" x "} {x.title} {" "}</div>
                                        ))}</div>
                                    </li>
                                </ul>
                            </div>
                        </Zoom>
                    </Modal>)
            }

            <div>
                <div className="cart">
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            €{item.price} x {item.count} {" "}
                                            <button className="button"
                                                    onClick={() => dispatch(removeFromCart(item))}>Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 && (
                    <div>
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total: {" "}
                                    €{cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(1)}
                                </div>
                                <button onClick={() => setValues({...values, showCheckout: true})}
                                        className="button primary">
                                    Proceed
                                </button>
                            </div>
                        </div>

                        {showCheckout && (
                            <Fade right cascade>
                                <div className="cart">
                                    <form onSubmit={handleOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <label>Email</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    onChange={handleInputChange('email')}
                                                />
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    onChange={handleInputChange('name')}
                                                />
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input
                                                    name="address"
                                                    type="text"
                                                    required
                                                    onChange={handleInputChange('address')}
                                                />
                                            </li>
                                            <li>
                                                <button type="submit" className="button primary">Checkout</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </Fade>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;