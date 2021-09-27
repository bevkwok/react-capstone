import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function Body() {
    
    return (
        <BrowserRouter>
            <div>
                <div className="grid-container">
                    <header className="row">
                        <div>
                        <a className="brand" href="/"><i className="fas fa-heart"></i>Shopaholic</a>
                        </div>
                        <div>
                        <a className="header-link" href="cart.html">Cart</a>
                        <a className="header-link" href="signin.html">Sign In</a>
                        </div>
                    </header>
                    <main>
                    <Route path="/cart/:id?" component={CartPage} exact></Route>
                    <Route path="/product/:id" component={ProductPage} exact></Route>
                    <Route path="/" component={HomePage} exact></Route>
                    </main>
                    <footer className="row center">All right reserved</footer>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Body;
