import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default RoutesApp;