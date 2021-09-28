import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';

const CartPage= (props: any) => {
    
    const productId = props.match.params.id;
    const qty = props.location.search ? props.location.search.split('=')[1] : '1'
    
    const cart = useSelector((state: {cart: CartItemState}) => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    const removeFromCartHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems?.length === 0 || cartItems === null
                    ? 
                        <>
                            <MessageBox variant="error" message={`Your cart is empty`} />
                        </>
                    :
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img 
                                                src={item.image} 
                                                alt={item.name} className="img-small"
                                            ></img>
                                        </div>
                                        <div className="min-27">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                            <select 
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product,
                                                            e.target.value)
                                                            
                                                            )
                                                        }
                                                        >
                                                        {
                                                            [...Array(item.countInStock).keys()].map(
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
                                        <div>
                                            <button 
                                                type="button"
                                                onClick={() => removeFromCartHandler(item.product)}>Delete
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal 
                                (
                                    {cartItems?.reduce((a, c) => a + Number(c.qty), 0)} items
                                ) : $ {cartItems?.reduce((a, c) => a + c.price * Number(c.qty), 0)}
                            </h2>
                        </li>
                        <li>
                            <button 
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={!cartItems || cartItems.length === 0}
                            >
                                Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartPage
