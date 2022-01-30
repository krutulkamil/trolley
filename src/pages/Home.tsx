// react
import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';
// react-query
import {useQuery} from 'react-query';
// components
import Filter from "../components/Filter";
import Products from "../components/Products";
import Cart from "../components/Cart";
// types
import {Product} from "../utils/types";

const fetchProducts = async (): Promise<Product[]> => {
    return await (await fetch('http://localhost:8000/api/products')).json();
}

const Home: FunctionComponent = (): JSX.Element => {
    const [products, setProducts] = useState([] as Product[])
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');
    const {data, isLoading, error} = useQuery<Product[]>('products', fetchProducts);

    useEffect(() => {
        setProducts(data)
    }, [data])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>'Something went wrong'</div>

    const sortProducts = (e: ChangeEvent<HTMLSelectElement>) => {
        let currentSort = e.target.value;
        setSort(currentSort);
        setProducts(products.slice().sort((a, b) => currentSort === "lowest" ? a.price > b.price ? 1 : -1
            : currentSort === "highest" ? a.price < b.price ? 1 : -1 : a._id < b._id ? 1 : -1))
    };

    const filterProducts = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '') {
            setSize(e.target.value);
            setProducts(data);
        } else {
            setSize(e.target.value);
            setProducts(data
                .filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
                .sort((a, b) => sort === "lowest" ? a.price > b.price ? 1 : -1
                : sort === "highest" ? a.price < b.price ? 1 : -1 : a._id < b._id ? 1 : -1));
        }
    };

    return (
        <div>
            <div className="content">
                <div className="main">
                    <Filter
                        count={products && products.length}
                        size={size}
                        sort={sort}
                        filterProducts={filterProducts}
                        sortProducts={sortProducts}
                    />
                    <Products products={products} />
                </div>
                <div className="sidebar">
                    <Cart/>
                </div>
            </div>
        </div>
    );
};

export default Home;
