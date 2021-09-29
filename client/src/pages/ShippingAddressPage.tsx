import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from '../redux/actions/cartAction';

const ShippingAddressPage = (props: any) => {
    const userSigninData = useSelector((state: {userSignin: signinUserState}) => state.userSignin);
    console.log("THIS IS THE USER INFO userSignin", userSigninData)
    const { userSignin } = userSigninData;
    const cart = useSelector((state: {cart: CartItemState}) => state.cart);
    const { shippingAddress } = cart;
    console.log("THIS IS THE USER INFO", userSignin)
    if (!userSignin) {
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [zipCode, setZipCode] = useState(shippingAddress.zipCode);
    const [state, setState] = useState(shippingAddress.state);
    const dispatch = useDispatch();
    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ fullName, address, city, zipCode, state })
        );
        props.history.push('/payment');
    };
    return (
        <div>
            <CheckoutSteps step1 step2 ></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        placeholder="Enter ZIP Code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        placeholder="Enter country"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddressPage