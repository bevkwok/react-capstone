import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import SigninPage from './pages/SigninPage';

function Body() {
    const cart = useSelector((state: any) => state.cart )
    const { cartItems } = cart

    const userSignin = useSelector((state: any) => state.userSignin )
    const { userInfo } = userSignin
    console.log(userInfo);
    
    
    
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
                                cartItems !== null && cartItems.length > 0 
                                ? <span className="badge">
                                    {cartItems.length}
                                </span>
                                : ''
                            }
                        </Link>
                        {
                            userInfo ? (
                                <Link className="header-link" to="#">
                                    {userInfo.username}'s Info</Link>
                            ) : (
                                <Link className="header-link" to="/signin">Sign In</Link>
                            )
                        }
                        </div>
                    </header>
                    <main>
                    <Route path="/cart/:id?" component={CartPage} exact></Route>
                    <Route path="/product/:id" component={ProductPage} exact></Route>
                    <Route path="/signin" component={SigninPage} exact></Route>

                    <Route path="/" component={HomePage} exact></Route>
                    </main>
                    <footer className="row center">All right reserved</footer>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Body;
