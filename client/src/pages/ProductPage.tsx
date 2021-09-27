import { useEffect, useState } from 'react'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../redux/actions/productActions'

type SetQty = (num: number) => void;

const ProductPage = (props: any) => {
    const dispatch = useDispatch()
    const productId = props.match.params.id;
    const [qty, setQty]: [number, SetQty] = useState(1)
    const productDetails = useSelector((state: {productDetails: ProductState}) => state.productDetails)
    console.log(productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <div>
            <Link to='/'>Back to Home</Link>
            {
                
                loading ? <LoadingBox />
                :
                error ? <MessageBox variant="error" message={error}/>
                :
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
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="row">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select value={qty} onChange={e => setQty(Number(e.target.value))}>
                                                                    {
                                                                        [...Array(product.countInStock).keys()].map(
                                                                            (x) => (
                                                                                <option 
                                                                                key={x + 1} 
                                                                                value={x + 1}>
                                                                                    {x+1}
                                                                                </option>
                                                                            )
                                                                        )
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button onClick={addToCartHandler} className="primary block">
                                                            Add to Cart
                                                        </button>
                                                    </li>
                                                </>
                                            )
                                        }
                                        
                                </ul>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ProductPage