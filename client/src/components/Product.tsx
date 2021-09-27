import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

interface Prop {
    product: IProduct
}

const Product: React.FC<Prop> = ({ product }) => {
    return (
        <div key={product._id} className="card">
            <Link to={`/product/${product._id}`}>
                <img className="img-medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <div className="price">${product.price}</div>
                <Rating rating={product.rating} numReviews={product.numReviews}/>
            </div>
        </div>
    )
}


export default Product