import React, {useState} from 'react';
import data from './data.json';
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

const App = () => {
    const [products, setProducts] = useState(data.products);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');
    const [cartItems, setCartItems] = useState( localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

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

    const sortProducts = e => {
        let currentSort = e.target.value;
        setSort(currentSort);
        setProducts(products.slice().sort((a, b) => currentSort === "lowest" ? a.price > b.price ? 1 : -1
            : currentSort === "highest" ? a.price < b.price ? 1 : -1 : a._id < b._id ? 1 : -1))
    };

    const filterProducts = e => {
        if (e.target.value === '') {
            setSize(e.target.value);
            setProducts(data.products);
        } else {
            setSize(e.target.value);
            setProducts(data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0));
        }
    };

    return (
        <div className="grid-container">
            <header>
                <a href="/">TROLLEY</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter
                            count={products.length}
                            size={size}
                            sort={sort}
                            filterProducts={filterProducts}
                            sortProducts={sortProducts}
                        />
                        <Products
                            products={products}
                            addToCart={addToCart}
                        />
                    </div>
                    <div className="sidebar">
                        <Cart
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                        />
                    </div>
                </div>
            </main>
            <footer>
                All right is reserved.
            </footer>
        </div>
    );
}


export default App;
