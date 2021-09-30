import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { Link } from 'react-router-dom'
import { saveOrderDetails } from '../redux/actions/orderAction'

const PlaceOrderPage = (props: any) => {
    const cart = useSelector((state: {cart: CartItemState}) => state.cart)
    // const order = useSelector((state: {cart: CartItemState}) => state.cart.placeOrder)
    console.log(cart);
    
    const toPrice = (num: number) => Number(num.toFixed(2));

    const allItemPrice = cart.cartItems ? toPrice(
        cart.cartItems.reduce((a, c) => Number(a) + Number(c.qty) * Number(c.price), 0)
    ) : 0
    const shippingPrice = allItemPrice > 100 ? toPrice(0) : toPrice(10)
    const taxPrice = toPrice(0.15 * allItemPrice)
    const totalPrice = allItemPrice + shippingPrice + taxPrice
    const orderDetails = {
        allItemPrice: allItemPrice,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice
    }

    if (!cart.paymentMethod) {
        props.history.push('/payment')
    }
    
    const dispatch = useDispatch()
    const placeOrderHandler = () => {
        dispatch(saveOrderDetails({ orderDetails }))
        props.history.push('/stripe');
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h1 className="center-text">Shipping</h1>
                                <p className="padding-2">
                                    <strong>Name:</strong> {cart.shippingAddress.fullName}
                                </p>
                                <p className="padding-2 padding-b-1">
                                    <strong>Address: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.zipCode}
                                    ,{cart.shippingAddress.state}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h1 className="center-text">Payment</h1>
                                <p className="padding-2 padding-b-1">
                                <strong>Method:</strong> {cart.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h1 className="center-text">Order Items</h1>
                                <ul>
                                {cart.cartItems?.map((item) => (
                                    <li key={item.product}>
                                    <div className="row padding-2 padding-b-1">
                                        <div>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-small"
                                            ></img>
                                        </div>
                                        <div className="min-27">
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </div>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
        `          <div className="card card-body">
                        <ul>
                            <li>
                                <h1 className="center-text">Order Summary</h1>
                            </li>
                            <li>
                                <div className="row padding-2">
                                    <div>Items</div>
                                    <div>${allItemPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row padding-2">
                                    <div>Shipping</div>
                                    <div>${shippingPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row padding-2">
                                    <div>Tax</div>
                                    <div>${taxPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row padding-2 padding-b-1">
                                <div>
                                    <strong> Order Total</strong>
                                </div>
                                <div>
                                    <strong>${totalPrice}</strong>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="padding-2 padding-b-1">
                                    <button
                                        type="button"
                                        onClick={placeOrderHandler}
                                        className="primary block"
                                        disabled={cart.cartItems?.length === 0}
                                        >
                                        Place Order
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>`
            </div>
        </div>
    )
}

export default PlaceOrderPage