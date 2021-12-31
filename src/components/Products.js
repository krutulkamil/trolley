import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';

const Products = ({products, addToCart}) => {
    const [clickedProduct, setClickedProduct] = useState({
        product: null
    });

    const openModal = (product) => {
        setClickedProduct({product: product});
    };

    const closeModal = () => {
        setClickedProduct({product: null});
    };

    const {product} = clickedProduct;

    return (
        <div>
            <Fade bottom cascade>
                <ul className="products">
                    {products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={`/#${product._id}`} onClick={() => openModal(product)}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>€{product.price}</div>
                                    <button onClick={() => addToCart(product)} className="button primary">Add To Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Fade>
            {product && (
                <Modal
                    isOpen={true}
                    onRequestClose={closeModal}
                    appElement={document.getElementById('root')}
                >
                    <Zoom>
                        <button className="close-modal" onClick={closeModal}>x</button>
                        <div className="product-details">
                            <img src={product.image} alt={product.title}/>
                            <div className="product-details-description">
                                <p>
                                    <strong>{product.title}</strong>
                                </p>
                                <p>{product.description}</p>
                                <p>
                                    Available sizes {" "}
                                    {product.availableSizes.map(x => (
                                        <span>
                                            {" "}
                                            <button className="button">{x}</button>
                                        </span>
                                    ))}
                                </p>
                                <div className="product-price">
                                    <div>€{product.price}</div>
                                    <button className="button primary" onClick={() => {
                                        addToCart(product);
                                        closeModal()
                                    }}>Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>
            )}
        </div>
    );
};

export default Products;
