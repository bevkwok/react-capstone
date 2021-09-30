import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps';

const PaidPage = (props: any) => {
    const order = useSelector((state: {order: any}) => state.order);
    const userSigninData = useSelector((state: {userSignin: signinUserState}) => state.userSignin);
    console.log("order", order);
    console.log("userSigninData", userSigninData);
    
    
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
            <div className="form">
                <div>
                    <h1 className="center-text">Thank you for your order</h1>
                </div>
                <div>
                    <Link className="center-text" to='/'>Back to Main</Link>
                </div>
            </div>
        </div>
    )
}
export default PaidPage