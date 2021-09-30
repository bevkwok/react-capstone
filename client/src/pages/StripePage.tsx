import React from 'react'
import { useSelector } from 'react-redux'
import StripeContainer from '../components/stripe/StripeContainer'
import CheckoutSteps from '../components/CheckoutSteps';


const StripePage = (props: any) => {
    const order = useSelector((state: {order: any}) => state.order);
    if (!order || order === null) {
        props.history.push('/placeorder')
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
            <div className="form">
                <div>
                    <h1 className="center-text">Enter Your Card Information</h1>
                </div>
                <div>
                    <StripeContainer />
                </div>
            </div>
        </div>
    )
}
export default StripePage