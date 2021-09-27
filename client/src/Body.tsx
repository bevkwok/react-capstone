import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
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
                        <Link className="brand" to="/"><i className="fas fa-heart"></i>Shopaholic</Link>
                        </div>
                        <div>
                        <Link className="header-link" to="/cart">Cart</Link>
                        <Link className="header-link" to="/signin">Sign In</Link>
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
