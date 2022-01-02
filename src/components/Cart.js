import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../actions/cartActions";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const [values, setValues] = useState({
        name: "",
        email: "",
        address: "",
        showCheckout: false
    });

    const {name, email, address, showCheckout} = values;

    const handleOrder = (e) => {
        e.preventDefault();

        const order = {
            name,
            email,
            address,
            cartItems
        }
        // createOrder(order);
    };

    const handleInput = name => e => {
        setValues({...values, [name]: e.target.value});
    };

    return (
        <div>
            {cartItems.length === 0 ?
                <div className="cart cart-header">Cart is empty</div>
                :
                <div className="cart cart-header">You have {cartItems.length} in the cart {" "}</div>
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
                                            <button className="button" onClick={() => dispatch(removeFromCart(item))}>Remove
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
                                                    onChange={handleInput('email')}
                                                />
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    onChange={handleInput('name')}
                                                />
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input
                                                    name="address"
                                                    type="text"
                                                    required
                                                    onChange={handleInput('address')}
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
