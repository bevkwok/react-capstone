import React from 'react'
import Rating from './Rating'

interface Prop {
    product: IProduct
}

const Product: React.FC<Prop> = ({ product }) => {
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img className="img-medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <div className="price">${product.price}</div>
                <Rating rating={product.rating} numReviews={product.numReviews}/>
            </div>
        </div>
    )
}


export default Product