import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage'
import PaidPage from './pages/PaidPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ProductPage from './pages/ProductPage'
import RegisterPage from './pages/RegisterPage';
import ShippingAddressPage from './pages/ShippingAddressPage';
import SigninPage from './pages/SigninPage';
import StripePage from './pages/StripePage';
import { signout } from './redux/actions/userActions';

function Body() {
    const cart = useSelector((state: any) => state.cart )
    const { cartItems } = cart
    // const userSignin = useSelector((state: any) => state.userSignin )
    const userSigninData = useSelector((state: {userSignin: any}) => state.userSignin.userInfo);
    console.log("userSigninData in body", userSigninData);
    
    const dispatch = useDispatch()
    const signoutHandler = () => {
        dispatch(signout())
    }

    return (
        <BrowserRouter>
            <div>
                <div className="grid-container">
                    <header className="row">
                        <div>
                        <Link className="brand" to="/"><i className="fas fa-heart"></i>Shopaholic</Link>
                        </div>
                        <div>
                        <Link className="header-link" to="/cart">
                            Cart
                            {
                                cartItems && cartItems.length > 0 
                                ? <span className="badge">
                                    {cartItems.length}
                                </span>
                                : ''
                            }
                        </Link>
                        {
                            userSigninData ? (
                                <div className="dropdown">
                                    <Link className="header-link" to="#">
                                        {userSigninData.username}'s Info
                                    </Link>
                                    <ul className="dropdown-content">
                                        <div className="cool-link">
                                            <Link className="cool-link-text" to="#signout" onClick={signoutHandler}>Sign Out</Link>
                                        </div>
                                    </ul>
                                </div>
                            ) : (
                                <Link className="header-link" to="/signin">Sign In</Link>
                            )
                        }
                        </div>
                    </header>
                    <main>
                    <Route path="/cart/:id?" component={CartPage} exact></Route>
                    <Route path="/product/:id" component={ProductPage} exact></Route>
                    <Route path="/register" component={RegisterPage} exact></Route>
                    <Route path="/signin" component={SigninPage} exact></Route>
                    <Route path="/shipping" component={ShippingAddressPage} exact></Route>
                    <Route path="/payment" component={PaymentMethodPage} exact></Route>
                    <Route path="/placeorder" component={PlaceOrderPage} exact></Route>
                    <Route path="/stripe" component={StripePage} exact></Route>
                    <Route path="/complete-payment" component={PaidPage} exact></Route>
                    <Route path="/" component={HomePage} exact></Route>
                    </main>
                    <footer className="row center">All right reserved - Got some of Beverly's blood, sweat and tears</footer>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Body;
