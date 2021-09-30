
// import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { emptycart } from "../../redux/actions/cartAction";


const CheckoutForm = () => {
    const order = useSelector((state: {order: any}) => state.order);

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const dispatch = useDispatch()


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if(stripe !== null && elements !== null) {
            console.log("stripe and elements not null");
            
            const element = elements.getElement(CardElement)

            if(element !== null) {
                console.log("element not null");
                
                const { error, paymentMethod } = await stripe.createPaymentMethod({
                    type: "card",
                    card: element
                });
                
                if (!error && paymentMethod ) {
                    console.log("element not null");

                    console.log("Stripe 23 | token generated!", paymentMethod);
                    try {
                        const { id } = paymentMethod
                        console.log("order total is ", order.order.orderDetails.allItemPrice)
                        const response = await axios.post(
                            
                            "http://localhost:3001/stripe/charge",
                            {
                                amount: order.order.orderDetails.allItemPrice,
                                id: id,
                            }
                        )
                    
                            console.log("Stripe 35 | data", response.data.success)
                            console.log("response.data is ", response.data);
                            
                            if (response.data.success) {
                                console.log("CheckoutForm.js 25 | payment successful!")
                                history.push('/complete-payment');
                                dispatch(emptycart());
                            } else {
                                alert(response.data.message)
                            }
                    } catch (error) {
                        console.log("CheckoutForm.js 28 | ", error)
                    }
                } else {
                    console.log(error ? error.message : "something went wrong")
                    alert(error ? error.message : "something went wrong")
                }
            } else {
                console.log("elements.getElement(CardElement) is null")
            }
        } else {
            console.log("Stripe or Elements is null in checkoutfrom")
            
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="stripe-input">
                <CardElement />
            </div>
            {/* <button>Pay</button> */}
            <button
                className="primary block"
                disabled={!order || order === null}
            >
                Pay For Order
            </button>
        </form>
    );
};

export default CheckoutForm 