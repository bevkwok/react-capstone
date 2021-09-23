import React from 'react'
import data from '../data';
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

const ProductPage = (props: any) => {
    const product = data.products.find(product => product._id === props.match.params.id)
    if(!product){
        return <div>Product Not Found</div>
    }
    return (
        <div>
            <Link to='/'>Back to Home</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="img-large" src={product.image} alt={product.name} ></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price: $ {product.price}
                        </li>
                        <li>
                            Description: {product.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body product-card">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                        <span className="success">In Stock</span>
                                        ) : (
                                        <span className="error">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">
                                    Add to Cart
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage