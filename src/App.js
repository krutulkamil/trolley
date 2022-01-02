import React, {useState} from 'react';
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store"
import {Provider} from "react-redux";

const App = () => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    const addToCart = (product) => {
        const itemsInCart = cartItems.slice();
        let alreadyInCart = false;
        itemsInCart.forEach(item => {
            if (item._id === product._id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            itemsInCart.push({...product, count: 1});
        }
        setCartItems(itemsInCart);
        localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
    };

    const removeFromCart = (product) => {
        const itemsInCart = cartItems.slice();
        setCartItems(itemsInCart.filter(x => x._id !== product._id));
        localStorage.setItem("cartItems", JSON.stringify(itemsInCart.filter(x => x._id !== product._id)));
    };

    const createOrder = (order) => {
        alert("Need to save order for " + order.name);
    };

    return (
        <Provider store={store}>
            <div className="grid-container">
                <header>
                    <a href="/">TROLLEY</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <Filter/>
                            <Products addToCart={addToCart}
                            />
                        </div>
                        <div className="sidebar">
                            <Cart
                                cartItems={cartItems}
                                removeFromCart={removeFromCart}
                                createOrder={createOrder}
                            />
                        </div>
                    </div>
                </main>
                <footer>
                    All right is reserved.
                </footer>
            </div>
        </Provider>
    );
}

export default App;
