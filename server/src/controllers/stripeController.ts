import { Response, Request } from 'express'
import Stripe from 'stripe';
require("dotenv").config();

const stripe = new Stripe(`${process.env.STRIPE_SECRET_TEST}`, {
    apiVersion: '2020-08-27',
});
console.log("process.env.STRIPE_SECRET_TEST", process.env.STRIPE_SECRET_TEST);


const charge = async(req: Request, res: Response): Promise<void> => {
    console.log("stripe-routes.js 9 | route reached", req.body);
    let { amount, id } = req.body;
    console.log("stripe-routes.js 10 | amount and id", amount, id);
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD",
            description: "Paying to Shopaholic",
            payment_method: id,
            confirm: true,
        });
        console.log("stripe-routes.js 19 | payment", payment);
        res.json({
            message: "Payment Successful",
            success: true,
        });
    } catch (error) {
        console.log("stripe-routes.js 17 | error", error);
        res.json({
            message: "Payment Failed",
            success: false,
        });
    }
}

export { charge }