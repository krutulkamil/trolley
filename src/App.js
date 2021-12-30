import React, {useState} from 'react';
import data from './data.json';
import Products from "./components/Products";
import Filter from "./components/Filter";

const App = () => {
    const [products, setProducts] = useState(data.products);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');

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
                        <Products products={products}/>
                    </div>
                    <div className="sidebar">Cart Items</div>
                </div>
            </main>
            <footer>
                All right is reserved.
            </footer>
        </div>
    )
}


export default App;
