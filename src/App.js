import React, {useState} from 'react';
import data from './data.json';
import Products from "./components/Products";

const App = () => {
    const [products, setProducts] = useState(data.products);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');

    return (
        <div className="grid-container">
            <header>
                <a href="/">TROLLEY</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
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
