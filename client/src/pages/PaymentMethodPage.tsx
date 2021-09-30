import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../redux/actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentMethodPage = (props: any) => {
    const cart = useSelector((state: {cart: CartItemState}) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('Stripe');
    const dispatch = useDispatch();
    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1 className="center-text">Payment Method</h1>
                </div>
                <div>
                    <div className="padding-2">
                        <input
                        type="radio"
                        id="stripe"
                        value="Stripe"
                        name="paymentMethod"
                        required
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PaymentMethodPage